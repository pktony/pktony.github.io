import { IconBase } from "./IconBase";

export function PlayIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size}>
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </IconBase>
  );
}
