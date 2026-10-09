import type { ReactNode } from "react";

type ContainerProps = { children: ReactNode; className?: string };

// 페이지 전체 폭의 단일 기준. 폭을 바꾸려면 여기만 고치면 된다
export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}
