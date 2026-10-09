import type { Metric } from "@/types/resume";
import { MetricCard } from "./MetricCard";

export function MetricGrid({ metrics }: { metrics: Metric[] }) {
  if (metrics.length === 0) return null;
  return (
    <dl className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
      {metrics.map((m) => (
        <MetricCard key={m.label} metric={m} />
      ))}
    </dl>
  );
}
