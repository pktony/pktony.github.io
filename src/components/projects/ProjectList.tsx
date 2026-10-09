import type { Project } from "@/types/resume";
import { ProjectRow } from "./ProjectRow";

type ProjectListProps = { projects: Project[]; level: 3 | 4 };

export function ProjectList({ projects, level }: ProjectListProps) {
  return (
    <ul className="divide-y divide-line border-t border-line">
      {projects.map((p) => (
        <ProjectRow key={p.name} project={p} level={level} />
      ))}
    </ul>
  );
}
