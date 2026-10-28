import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { UnityFrameSession } from '../.test-build/lib/unity/UnityFrameSession.js';

const build = { id: 'test', url: '/webgl/test/index.html', channel: 'test', downloadBytes: 1 };

function environment() {
  const listeners = new Set(), frames = [], states = [];
  globalThis.location = { origin: 'https://pktony.github.io' };
  globalThis.window = { addEventListener: (type, callback) => listeners.add(callback), removeEventListener: (type, callback) => listeners.delete(callback) };
  globalThis.document = {
    body: {}, activeElement: {},
    createElement: () => ({
      contentWindow: { postMessage() {} }, isConnected: false, style: {},
      addEventListener() {}, removeEventListener() {}, setAttribute() {}, focus() {},
      remove() { this.isConnected = false; frames.splice(frames.indexOf(this), 1); },
    }),
  };
  const host = { isConnected: true, append: frame => { frames.push(frame); frame.isConnected = true; } };
  const send = (frame, data, origin = location.origin) => {
    for (const callback of [...listeners]) callback({ source: frame.contentWindow, origin, data: { channel: build.channel, ...data } });
  };
  return { host, frames, states, listeners, send, session: () => new UnityFrameSession(host, build, state => states.push(state)) };
}

test('disposal waits for its own quit acknowledgment and removes listeners', async () => {
  const h = environment(), session = h.session(); await session.start();
  const frame = h.frames[0]; h.send(frame, { type: 'ready' });
  const disposal = session.dispose();
  h.send(frame, { type: 'stopped' }, 'https://example.com');
  assert.equal(h.frames.length, 1);
  h.send(frame, { type: 'stopped' }); await disposal;
  assert.equal(h.frames.length, 0); assert.equal(h.listeners.size, 0);
  assert.equal(h.states.at(-1).phase, 'running');
});

test('leaving before the frame mounts prevents a late game instance', async () => {
  const h = environment(), session = h.session();
  const starting = session.start(); await session.dispose(false); await starting;
  assert.equal(h.frames.length, 0); assert.equal(h.listeners.size, 0);
});

test('a replacement frame waits for the previous instance to quit', async () => {
  const h = environment(), first = h.session(); await first.start();
  const oldFrame = h.frames[0], disposal = first.dispose();
  const second = h.session(), starting = second.start(); await Promise.resolve();
  assert.equal(h.frames.length, 1);
  h.send(oldFrame, { type: 'stopped' }); await disposal; await starting;
  assert.equal(h.frames.length, 1); assert.notEqual(h.frames[0], oldFrame);
  await second.dispose(false); assert.equal(h.listeners.size, 0);
});

test('errors release the game and reject late progress or ready events', async () => {
  const h = environment(), session = h.session(); await session.start();
  const frame = h.frames[0];
  h.send(frame, { type: 'error' }); h.send(frame, { type: 'ready' }); h.send(frame, { type: 'progress', value: .5 });
  assert.deepEqual(h.states.map(state => state.phase), ['error']);
  h.send(frame, { type: 'stopped' }); await session.dispose();
  assert.equal(h.frames.length, 0); assert.equal(h.listeners.size, 0);
});
