import type { ReactNode } from "react";

// 성과 수치 강조: 모노 폰트 + 아래쪽만 칠한 형광펜. 글자색은 본문색을 유지해 대비를 지킨다.
// 색은 --color-mark 토큰이 정한다(라이트·다크·인쇄 값은 globals.css)
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <mark className="box-decoration-clone bg-transparent bg-linear-to-t from-mark from-60% to-transparent to-60% px-0.5 font-mono font-bold text-inherit">
      {children}
    </mark>
  );
}
