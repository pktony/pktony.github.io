import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { readUnityMessage } from '../.test-build/lib/unity/protocol.js';

const frame = {};
const origin = 'https://pktony.github.io';
const channel = 'modular-grid-inventory';
const event = (data, extra = {}) => ({ source: frame, origin, data: { channel, ...data }, ...extra });

test('only the current same-origin iframe can change player state', () => {
  assert.deepEqual(readUnityMessage(event({ type: 'ready' }), frame, origin, channel), { type: 'ready' });
  for (const invalid of [
    event({ type: 'ready' }, { source: {} }),
    event({ type: 'ready' }, { origin: 'https://example.com' }),
    event({ type: 'ready', channel: 'another-game' }),
    event({ type: 'fullscreen' }),
    event({ type: 'ready' }, { data: null }),
  ]) assert.equal(readUnityMessage(invalid, frame, origin, channel), null);
  assert.equal(readUnityMessage(event({ type: 'ready' }, { source: null }), null, origin, channel), null);
});

test('download progress rejects invalid or unbounded values', () => {
  for (const value of [NaN, Infinity, -0.1, 1.1, '1', null])
    assert.equal(readUnityMessage(event({ type: 'progress', value }), frame, origin, channel), null);
  assert.deepEqual(readUnityMessage(event({ type: 'progress', value: 0.65 }), frame, origin, channel), { type: 'progress', value: 0.65 });
});
