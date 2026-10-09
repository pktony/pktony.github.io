import { IconBase } from "./IconBase";

export function SpriteIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m10 9 5 3-5 3z" />
    </IconBase>
  );
}
