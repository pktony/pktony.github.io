import type { ServiceStats as ServiceStatsData } from "@/types/resume";
import { ServiceStatItem } from "./ServiceStatItem";

// 서비스 전체 지표 띠. 개인 성과 카드(MetricGrid)보다 한 단계 낮은 위계로 가는 선과 구분선만 사용한다
export function ServiceStats({ stats }: { stats?: ServiceStatsData }) {
  if (!stats || stats.items.length === 0) return null;
  return (
    <section aria-label={stats.title} className="mt-6 border-y border-line py-4">
      <h4 className="font-mono text-caption font-medium uppercase tracking-wide text-muted">{stats.title}</h4>
      <dl className="mt-3 grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {stats.items.map((stat) => (
          <ServiceStatItem key={stat.label} stat={stat} />
        ))}
      </dl>
    </section>
  );
}
