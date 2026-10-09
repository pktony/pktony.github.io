import { IconBase } from "./IconBase";

export function MailIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </IconBase>
  );
}
