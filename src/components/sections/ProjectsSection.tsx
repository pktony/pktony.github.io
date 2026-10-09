import { MoreCasesHeading } from "@/components/projects/MoreCasesHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import type { Project } from "@/types/resume";

type ProjectsSectionProps = { featured: Project[]; extras: Project[] };

export function ProjectsSection({ featured, extras }: ProjectsSectionProps) {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-6">
        {featured.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </ul>
      {extras.length > 0 && (
        <>
          <MoreCasesHeading />
          <ul className="grid gap-6 md:grid-cols-2">
            {extras.map((p) => (
              <ProjectCard key={p.name} project={p} compact />
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
