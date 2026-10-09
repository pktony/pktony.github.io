import { IconBase } from "./IconBase";

export function WidgetIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size}>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <circle cx="17" cy="17" r="4" />
    </IconBase>
  );
}
