import { IconBase } from "./IconBase";

export function GridIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </IconBase>
  );
}
