import type { NavItem } from "@/types/resume";

export function SectionNav({ items }: { items: NavItem[] }) {
  return (
    <nav aria-label="섹션 이동" className="hidden gap-1 sm:flex print:hidden">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-full px-3 py-2 text-meta text-muted hover:bg-card hover:text-ink"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
