import { ProjectIcon } from "./ProjectIcon";

type ProjectHeaderProps = { name: string; role?: string; level: 3 | 4; icon?: string };

// 프로젝트 이름과 담당 역할. 제목 단계(h3/h4)는 문서 구조에 맞춰 호출하는 쪽이 정한다
export function ProjectHeader({ name, role, level, icon }: ProjectHeaderProps) {
  const Heading = level === 3 ? "h3" : "h4";
  return (
    <>
      <div className="flex items-center gap-3">
        {icon && <ProjectIcon src={icon} />}
        <Heading className={`${level === 3 ? "text-title" : "text-subtitle"} font-bold`}>{name}</Heading>
      </div>
      {role && <p className="mt-1 text-meta text-muted">{role}</p>}
    </>
  );
}
