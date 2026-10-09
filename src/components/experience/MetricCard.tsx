import { Card } from "@/components/ui/Card";
import type { Metric } from "@/types/resume";

// 큰 숫자는 강조색, 설명은 보조색. 숫자 폭을 고정해 값이 바뀌어도 흔들리지 않게 한다
export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <Card className="p-5">
      <div className="mb-4 h-1 w-8 rounded-full bg-[var(--accent)]" aria-hidden="true" />
      <dd className="font-mono text-xl font-bold leading-tight tabular-nums sm:text-2xl">{metric.value}</dd>
      <dt className="mt-2 text-sm text-[var(--muted)]">{metric.label}</dt>
    </Card>
  );
}
