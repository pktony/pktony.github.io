"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function GameRouteFocus() {
  const path = usePathname();
  useEffect(() => {
    const hash = location.hash.slice(1);
    const target = hash.startsWith("game-") ? document.getElementById(hash) : document.querySelector<HTMLElement>("main h1");
    if (!target) return;
    if (target.tagName === "H1") target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }, [path]);
  return null;
}
