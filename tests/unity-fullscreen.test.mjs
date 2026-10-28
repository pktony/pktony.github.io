import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { togglePlayerFullscreen } from '../.test-build/lib/unity/fullscreen.js';

test('fullscreen targets the player workspace without promoting the iframe', async () => {
  let requests = 0;
  const player = { requestFullscreen: async () => { requests++; } };
  const owner = { fullscreenElement: null, exitFullscreen: async () => assert.fail('Unexpected exit') };
  await togglePlayerFullscreen(player, owner);
  assert.equal(requests, 1);
});

test('the same control exits an active player fullscreen', async () => {
  let exits = 0;
  const player = { requestFullscreen: async () => assert.fail('Unexpected second entry') };
  const owner = { fullscreenElement: player, exitFullscreen: async () => { exits++; } };
  await togglePlayerFullscreen(player, owner);
  assert.equal(exits, 1);
});

test('a rejected fullscreen request remains observable to the UI', async () => {
  const player = { requestFullscreen: async () => { throw new Error('Not allowed'); } };
  await assert.rejects(togglePlayerFullscreen(player, { fullscreenElement: null }), /Not allowed/);
});
