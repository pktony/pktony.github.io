import type { ProjectGroup } from "@/types/resume";
import { ProjectGroupHeader } from "./ProjectGroupHeader";
import { ProjectList } from "./ProjectList";

export function ProjectGroupBlock({ group }: { group: ProjectGroup }) {
  return (
    <article aria-label={group.title}>
      <ProjectGroupHeader group={group} />
      <ProjectList projects={group.projects} level={4} />
    </article>
  );
}
