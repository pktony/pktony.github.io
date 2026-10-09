import type { ReactNode } from "react";
import { iconButtonStyle } from "./iconButtonStyle";

type IconLinkButtonProps = { href: string; label: string; external?: boolean; children: ReactNode };

export function IconLinkButton({ href, label, external = false, children }: IconLinkButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className={iconButtonStyle}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
