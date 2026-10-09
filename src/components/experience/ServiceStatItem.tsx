import type { ServiceStat } from "@/types/resume";

// 서비스 지표 하나. <dl> 의미 순서(dt → dd)를 지키고, 화면에서는 숫자가 위로 오도록 뒤집는다
export function ServiceStatItem({ stat }: { stat: ServiceStat }) {
  return (
    <div className="flex flex-col-reverse gap-3 px-5 py-4 first:pl-0 sm:px-6 sm:first:pl-0">
      <dt className="font-semibold">{stat.label}</dt>
      <dd className="font-mono text-3xl font-bold leading-none tabular-nums sm:text-4xl">{stat.value}</dd>
    </div>
  );
}
