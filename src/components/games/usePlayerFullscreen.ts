"use client";

import { useEffect, useState, type RefObject } from "react";
import { togglePlayerFullscreen } from "@/lib/unity/fullscreen";

export function usePlayerFullscreen(player: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const element = player.current;
    const changed = () => setActive(document.fullscreenElement === element);
    document.addEventListener("fullscreenchange", changed);
    return () => {
      document.removeEventListener("fullscreenchange", changed);
      if (element && document.fullscreenElement === element) void document.exitFullscreen().catch(() => {});
    };
  }, [player]);

  async function toggle() {
    if (!player.current) return;
    try { await togglePlayerFullscreen(player.current); setError(""); }
    catch { setError("전체 화면을 사용할 수 없습니다. 새 창에서 실행해 주세요."); }
  }
  return { active, error, toggle };
}
