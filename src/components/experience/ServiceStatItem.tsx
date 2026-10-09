import type { ServiceStat } from "@/types/resume";

// 서비스 지표 하나: 큰 숫자 + 이름 + 출처 메모
export function ServiceStatItem({ stat }: { stat: ServiceStat }) {
  return (
    <div className="px-5 py-4 first:pl-0 sm:px-6 sm:first:pl-0">
      <dd className="font-mono text-3xl font-bold leading-none tabular-nums sm:text-4xl">{stat.value}</dd>
      <dt className="mt-3 font-semibold">{stat.label}</dt>
      <p className="mt-1 text-sm text-[var(--muted)]">{stat.note}</p>
    </div>
  );
}
