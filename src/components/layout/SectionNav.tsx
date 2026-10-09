import type { NavItem } from "@/types/resume";

export function SectionNav({ items }: { items: NavItem[] }) {
  return (
    <nav aria-label="섹션 이동" className="hidden gap-1 sm:flex">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-full px-3 py-2 text-sm text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--fg)]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
