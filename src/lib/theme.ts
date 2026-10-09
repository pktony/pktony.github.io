export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// 저장값이 있으면 그것을, 없으면 시스템 설정을 따른다. hydration 전에 실행되는 인라인 스크립트.
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export function toggleTheme(): Theme {
  const next: Theme = document.documentElement.classList.toggle("dark") ? "dark" : "light";
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {}
  return next;
}
