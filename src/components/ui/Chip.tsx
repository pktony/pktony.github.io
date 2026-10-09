import type { ReactNode } from "react";

type ChipProps = { children: ReactNode; variant?: "tonal" | "outline"; size?: "sm" | "md" };

const variantClass = {
  tonal: "bg-chip text-chip-ink",
  outline: "border border-line",
} as const;

const sizeClass = {
  sm: "px-2.5 py-0.5 text-caption",
  md: "px-3 py-1 text-meta",
} as const;

export function Chip({ children, variant = "tonal", size = "md" }: ChipProps) {
  return (
    <li className={`rounded-full font-medium ${variantClass[variant]} ${sizeClass[size]}`}>{children}</li>
  );
}
