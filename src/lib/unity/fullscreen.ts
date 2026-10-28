export function togglePlayerFullscreen(player: HTMLElement, owner: Document = document): Promise<void> {
  return owner.fullscreenElement === player ? owner.exitFullscreen() : player.requestFullscreen();
}
