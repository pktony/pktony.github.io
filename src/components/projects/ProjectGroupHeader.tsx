import type { ProjectGroup } from "@/types/resume";
import { ProjectIcon } from "./ProjectIcon";
import { ProjectLinks } from "./ProjectLinks";

// 그룹(예: Moii) 소개: 이름, 기간, 한 줄 요약, 담당 역할, 링크
export function ProjectGroupHeader({ group }: { group: ProjectGroup }) {
  return (
    <div className="grid gap-3 pb-7 md:grid-cols-[11rem_1fr] md:gap-8">
      <p className="font-mono text-sm tabular-nums text-[var(--muted)] md:pt-2">{group.period}</p>
      <div>
        <div className="flex items-center gap-3">
          {group.icon && <ProjectIcon name={group.icon} />}
          <h3 className="text-3xl font-extrabold leading-tight">{group.title}</h3>
        </div>
        <p className="mt-3 text-[17px] font-medium">{group.summary}</p>
        {group.role && <p className="mt-2 text-sm text-[var(--muted)]">{group.role}</p>}
        <ProjectLinks links={group.links} />
      </div>
    </div>
  );
}
