import { PersonalProjectsHeading } from "@/components/projects/PersonalProjectsHeading";
import { ProjectGroupBlock } from "@/components/projects/ProjectGroupBlock";
import { ProjectList } from "@/components/projects/ProjectList";
import { Section } from "@/components/ui/Section";
import type { Project, ProjectGroup } from "@/types/resume";

type ProjectsSectionProps = { groups: ProjectGroup[]; work: Project[]; personal: Project[] };

export function ProjectsSection({ groups, work, personal }: ProjectsSectionProps) {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-14">
        {groups.map((g) => (
          <ProjectGroupBlock key={g.title} group={g} />
        ))}
        <ProjectList projects={work} level={3} />
      </div>
      {personal.length > 0 && (
        <>
          <PersonalProjectsHeading />
          <ProjectList projects={personal} level={3} />
        </>
      )}
    </Section>
  );
}
