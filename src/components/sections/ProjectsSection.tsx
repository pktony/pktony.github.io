import { IconBase } from "@/components/icons/IconBase";
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
        <ProjectList projects={work} level={3} />
        {groups.map((g) => (
          <ProjectGroupBlock key={g.title} group={g} />
        ))}
      </div>
      {personal.length > 0 && (
        <>
          <PersonalProjectsHeading />
          <ProjectList projects={personal} level={3} />
        </>
      )}
      <div className="grid gap-3 border-t border-line py-row md:grid-cols-[11rem_1fr] md:gap-8 print:hidden">
        <p className="font-mono text-meta text-muted md:pt-1">Playground</p>
        <div>
          <p className="text-body font-medium">브라우저에서 바로 실행하는 비전 필터 · Unity 인터랙션</p>
          <p className="mt-1.5 text-meta text-muted">
            Golden Ratio · Beobgyu Filter · Modular Grid Inventory · Dialogue Flow
          </p>
          <a
            href="/playground/"
            className="mt-4 inline-flex min-h-6 items-center gap-1.5 text-meta font-semibold text-accent underline-offset-4 hover:underline"
          >
            Playground 열기
            <IconBase size={16}>
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </IconBase>
          </a>
        </div>
      </div>
    </Section>
  );
}
