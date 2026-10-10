import { IconBase } from "./IconBase";

export function CloseIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size}>
      <path d="M18 6 6 18M6 6l12 12" />
    </IconBase>
  );
}
