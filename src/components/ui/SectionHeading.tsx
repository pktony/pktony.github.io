type SectionHeadingProps = { id: string; eyebrow: string; title: string };

// 모노 서체 번호 + 큰 제목 + 얇은 구분선 (색은 강조색 한 가지만 사용)
export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <>
      <p className="font-mono text-sm font-medium text-[var(--accent)]">{eyebrow}</p>
      <h2 id={id} className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5 h-px bg-[var(--line)]" />
    </>
  );
}
