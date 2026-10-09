import type { ReactNode } from "react";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";

type ExternalLinkProps = { href: string; children: ReactNode };

// 새 탭으로 열리는 텍스트 링크 (스크린리더에는 "새 탭"을 안내)
export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-6 items-center gap-1 font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
    >
      {children}
      <ExternalLinkIcon />
      <span className="sr-only">(새 탭)</span>
    </a>
  );
}
