import type { ReactNode } from "react";

type SectionHeadingProps = { id: string; title: string; action?: ReactNode };

// 제목 + 얇은 구분선. action이 있으면 제목 줄 오른쪽 끝에 놓는다 (제목이 줄바꿈돼도 밀리지 않게 wrap)
export function SectionHeading({ id, title, action }: SectionHeadingProps) {
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <h2 id={id} className="text-headline font-extrabold tracking-tight sm:text-display">
          {title}
        </h2>
        {action}
      </div>
      <div className="mt-5 h-px bg-line" />
    </>
  );
}
