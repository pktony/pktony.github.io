import type { ReactNode } from "react";

type IconBaseProps = { size?: number; children: ReactNode; className?: string };

// 모든 아이콘이 공유하는 SVG 껍데기 (장식용이므로 스크린리더에서 숨김)
export function IconBase({ size = 20, className, children }: IconBaseProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
