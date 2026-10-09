import { Chip } from "./Chip";

type ChipListProps = {
  items: string[];
  label: string;
  variant?: "tonal" | "outline";
  size?: "sm" | "md";
  className?: string;
};

export function ChipList({ items, label, variant, size, className = "" }: ChipListProps) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <Chip key={item} variant={variant} size={size}>
          {item}
        </Chip>
      ))}
    </ul>
  );
}
