"use client";

export function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="테마 전환"
      className="rounded border border-[var(--line)] px-3 py-1 text-sm"
    >
      ◐
    </button>
  );
}
