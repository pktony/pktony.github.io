import { BulletList } from "@/components/ui/BulletList";
import { ChipList } from "@/components/ui/ChipList";
import type { Project } from "@/types/resume";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectLinks } from "./ProjectLinks";

type ProjectRowProps = { project: Project; level: 3 | 4 };

// 박스 없이 구분선으로 나뉘는 한 행: 왼쪽 기간 / 오른쪽 내용 (Experience와 같은 구조)
export function ProjectRow({ project: p, level }: ProjectRowProps) {
  return (
    <li className="grid gap-3 py-row md:grid-cols-[11rem_1fr] md:gap-8">
      <p className="font-mono text-sm tabular-nums text-[var(--muted)] md:pt-1.5">{p.period}</p>
      <div>
        <ProjectHeader name={p.name} role={p.role} level={level} icon={p.icon} />
        <p className="mt-block text-lead font-medium">{p.summary}</p>
        <BulletList items={p.bullets} className="mt-block max-w-[var(--measure)]" />
        <ChipList items={p.tech} label="사용 기술" size="sm" className="mt-block" />
        <ProjectLinks links={p.links} />
      </div>
    </li>
  );
}
