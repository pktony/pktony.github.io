// 프로젝트 성격 표시(예: 개인 프로젝트). 제목 옆에 작게 붙는다
export function ProjectLabel({ text }: { text: string }) {
  return (
    <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 text-caption font-medium text-muted">
      {text}
    </span>
  );
}
