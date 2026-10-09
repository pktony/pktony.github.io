import { Card } from "@/components/ui/Card";
import type { Metric } from "@/types/resume";

// 큰 숫자는 위, 설명은 아래. <dl> 의미 순서(dt → dd)를 지키려고 화면에서만 뒤집는다
export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <Card className="p-5">
      <div className="mb-4 h-1 w-8 rounded-full bg-[var(--accent)]" aria-hidden="true" />
      <div className="flex flex-col-reverse gap-2">
        <dt className="text-sm text-[var(--muted)]">{metric.label}</dt>
        <dd className="font-mono text-xl font-bold leading-tight tabular-nums sm:text-2xl">{metric.value}</dd>
      </div>
    </Card>
  );
}
