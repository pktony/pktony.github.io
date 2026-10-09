import { MoreCasesHeading } from "@/components/projects/MoreCasesHeading";
import { ProjectGroupBlock } from "@/components/projects/ProjectGroupBlock";
import { ProjectList } from "@/components/projects/ProjectList";
import { Section } from "@/components/ui/Section";
import type { Project, ProjectGroup } from "@/types/resume";

type ProjectsSectionProps = { groups: ProjectGroup[]; featured: Project[]; extras: Project[] };

export function ProjectsSection({ groups, featured, extras }: ProjectsSectionProps) {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-20">
        {groups.map((g) => (
          <ProjectGroupBlock key={g.title} group={g} />
        ))}
        <ProjectList projects={featured} level={3} />
      </div>
      {extras.length > 0 && (
        <>
          <MoreCasesHeading />
          <ProjectList projects={extras} level={3} />
        </>
      )}
    </Section>
  );
}
