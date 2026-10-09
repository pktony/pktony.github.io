import { IconBase } from "./IconBase";

export function ExternalLinkIcon({ size = 14 }: { size?: number }) {
  return (
    <IconBase size={size}>
      <path d="M7 17 17 7M8 7h9v9" />
    </IconBase>
  );
}
