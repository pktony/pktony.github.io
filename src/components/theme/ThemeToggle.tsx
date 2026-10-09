"use client";

import { MoonIcon } from "@/components/icons/MoonIcon";
import { SunIcon } from "@/components/icons/SunIcon";
import { IconButton } from "@/components/ui/IconButton";
import { toggleTheme } from "@/lib/theme";

export function ThemeToggle() {
  return (
    <IconButton label="라이트/다크 테마 전환" onClick={() => toggleTheme()}>
      <MoonIcon />
      <SunIcon />
    </IconButton>
  );
}
