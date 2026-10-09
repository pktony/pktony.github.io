import { IconBase } from "./IconBase";

export function BlogIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size}>
      <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </IconBase>
  );
}
