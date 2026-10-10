import type { ServiceStats as ServiceStatsData } from "@/types/resume";
import { ServiceStatItem } from "./ServiceStatItem";

// 서비스 전체 지표 띠. 박스 없이 가는 선과 구분선만 사용한다. 제목은 화면에 보이지 않고 스크린리더용 라벨로만 쓴다
export function ServiceStats({ stats }: { stats?: ServiceStatsData }) {
  if (!stats || stats.items.length === 0) return null;
  return (
    <section aria-label={stats.title} className="mt-6 border-y border-line py-4">
      <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {stats.items.map((stat) => (
          <ServiceStatItem key={stat.label} stat={stat} />
        ))}
      </dl>
    </section>
  );
}
