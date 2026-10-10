import type { ProjectGroup } from "@/types/resume";
import { ServiceStats } from "./ServiceStats";
import { ProjectIcon } from "./ProjectIcon";
import { ProjectLinks } from "./ProjectLinks";

// 그룹(예: Moii) 소개: 이름, 기간, 한 줄 요약, 담당 역할, 링크
export function ProjectGroupHeader({ group }: { group: ProjectGroup }) {
  return (
    <div className="grid gap-3 pb-row md:grid-cols-[11rem_1fr] md:gap-8">
      <p className="font-mono text-meta tabular-nums text-muted md:pt-2">{group.period}</p>
      <div>
        <div className="flex items-center gap-3">
          {group.icon && <ProjectIcon src={group.icon} />}
          <h3 className="text-headline font-extrabold">{group.title}</h3>
        </div>
        <p className="mt-3 text-body font-medium">{group.summary}</p>
        {group.role && <p className="mt-2 text-meta text-muted">{group.role}</p>}
        <ProjectLinks links={group.links} />
        <ServiceStats stats={group.serviceStats} />
      </div>
    </div>
  );
}
