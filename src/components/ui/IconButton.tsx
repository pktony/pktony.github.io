import type { ReactNode } from "react";
import { iconButtonStyle } from "./iconButtonStyle";

type IconButtonProps = { label: string; onClick: () => void; children: ReactNode };

export function IconButton({ label, onClick, children }: IconButtonProps) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className={iconButtonStyle}>
      {children}
    </button>
  );
}
