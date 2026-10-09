import { BulletList } from "@/components/ui/BulletList";
import { Card } from "@/components/ui/Card";
import { ChipList } from "@/components/ui/ChipList";
import type { Project } from "@/types/resume";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectLinks } from "./ProjectLinks";

type ProjectCardProps = { project: Project; compact?: boolean };

export function ProjectCard({ project: p, compact = false }: ProjectCardProps) {
  return (
    <li>
      <Card className={`h-full ${compact ? "p-5" : "p-6 sm:p-8"}`}>
        <ProjectHeader name={p.name} period={p.period} role={p.role} compact={compact} />
        <p className={`mt-4 font-medium ${compact ? "text-[15px]" : "text-[17px]"}`}>{p.summary}</p>
        <BulletList items={p.bullets} className="mt-4 space-y-2 text-[15px]" />
        <ChipList items={p.tech} label="사용 기술" size="sm" className="mt-5" />
        <ProjectLinks links={p.links} />
      </Card>
    </li>
  );
}
