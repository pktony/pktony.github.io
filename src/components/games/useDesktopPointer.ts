"use client";

import { useSyncExternalStore } from "react";

const query = "(min-width: 601px) and (hover: hover) and (pointer: fine)";
function subscribe(callback: () => void) {
  const media = matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
export function useDesktopPointer() {
  return useSyncExternalStore(subscribe, () => matchMedia(query).matches, () => false);
}
