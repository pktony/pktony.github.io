import { IconBase } from "./IconBase";

export function CubeIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size}>
      <path d="M12 3 4 7.5v9L12 21l8-4.5v-9z" />
      <path d="M4 7.5 12 12l8-4.5M12 12v9" />
    </IconBase>
  );
}
