import { Rich } from "./Rich";

type BulletListProps = { items: string[]; className?: string };

export function BulletList({ items, className = "" }: BulletListProps) {
  return (
    <ul className={`list-disc space-y-list pl-5 leading-list marker:text-[var(--muted)] ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <Rich text={item} />
        </li>
      ))}
    </ul>
  );
}
