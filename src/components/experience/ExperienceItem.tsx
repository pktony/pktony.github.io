import { BulletList } from "@/components/ui/BulletList";
import { ChipList } from "@/components/ui/ChipList";
import type { Experience } from "@/types/resume";
import { MetricGrid } from "./MetricGrid";
import { ServiceStats } from "./ServiceStats";

// 한 직장의 경력: 왼쪽 기간 / 오른쪽 회사·역할·성과
export function ExperienceItem({ experience: e }: { experience: Experience }) {
  return (
    <li className="grid gap-3 md:grid-cols-[11rem_1fr] md:gap-8">
      <p className="font-mono text-sm tabular-nums text-[var(--muted)] md:pt-2">{e.period}</p>
      <div>
        <h3 className="text-2xl font-bold">{e.company}</h3>
        <p className="mt-1 text-[var(--muted)]">{e.role}</p>
        <ChipList items={e.badges} label="담당 영역" variant="outline" size="sm" className="mt-4" />
        <ServiceStats stats={e.serviceStats} />
        <BulletList items={e.bullets} className="mt-6 max-w-[var(--measure)] space-y-3" />
        <MetricGrid metrics={e.metrics} />
      </div>
    </li>
  );
}
