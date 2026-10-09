// 문서의 대표 제목(h1). 화면에는 소개 섹션이 보이므로 스크린리더용으로만 둔다
export function PageTitle({ children }: { children: string }) {
  return <h1 className="sr-only">{children}</h1>;
}
