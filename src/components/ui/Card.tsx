import type { ReactNode } from "react";

type CardProps = { children: ReactNode; className?: string };

// 평면 카드: 헤어라인 테두리 + 표면색. 그림자·그라데이션 없음
export function Card({ children, className = "" }: CardProps) {
  return <div className={`rounded-xl border border-line bg-card ${className}`}>{children}</div>;
}
