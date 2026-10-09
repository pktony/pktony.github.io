type ProjectHeaderProps = { name: string; role?: string; level: 3 | 4 };

// 프로젝트 이름과 담당 역할. 제목 단계(h3/h4)는 문서 구조에 맞춰 호출하는 쪽이 정한다
export function ProjectHeader({ name, role, level }: ProjectHeaderProps) {
  const Heading = level === 3 ? "h3" : "h4";
  return (
    <>
      <Heading className={`${level === 3 ? "text-2xl" : "text-xl"} font-bold leading-snug`}>{name}</Heading>
      {role && <p className="mt-1 text-sm text-[var(--muted)]">{role}</p>}
    </>
  );
}
