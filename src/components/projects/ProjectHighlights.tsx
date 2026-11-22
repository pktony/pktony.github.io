import type { ServiceStat } from "@/types/resume";

// 프로젝트 카드 안 핵심 지표 띠. 박스 없이 위아래 가는 선과 세로 구분선만 사용해 Moii 서비스 지표와 톤을 맞춘다
export function ProjectHighlights({ items }: { items?: ServiceStat[] }) {
  if (!items || items.length === 0) return null;
  return (
    <dl
      className={`mt-block grid grid-cols-2 gap-x-4 gap-y-3 border-y border-line py-3 sm:gap-x-0 sm:gap-y-0 sm:divide-x sm:divide-line ${
        items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
      }`}
    >
      {items.map((item) => (
        <div key={item.label} className="flex flex-col-reverse gap-1 sm:px-4 sm:first:pl-0 sm:last:pr-0">
          <dt className="text-caption text-muted">{item.label}</dt>
          <dd className="whitespace-nowrap font-mono text-body font-bold leading-tight tabular-nums text-accent">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
