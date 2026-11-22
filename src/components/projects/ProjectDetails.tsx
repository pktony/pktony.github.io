import type { ProjectDetail } from "@/types/resume";
import { profile } from "@/data/profile";
import { DetailSection } from "./DetailSection";
import { ProjectDetailButton } from "./ProjectDetailButton";

type ProjectDetailsProps = { name: string; subtitle?: string; icon?: string; detail?: ProjectDetail };

// 상세가 있는 프로젝트에만 "상세 보기" 버튼과 모달을 붙인다. 프로젝트 카드와 그룹 헤더가 같이 쓴다
export function ProjectDetails({ name, subtitle, icon, detail }: ProjectDetailsProps) {
  if (!detail || detail.sections.length === 0) return null;
  return (
    <ProjectDetailButton
      detailId={detail.id}
      href={`${profile.siteUrl}/?detail=${encodeURIComponent(detail.id)}`}
      name={name}
      subtitle={subtitle}
      icon={icon}
    >
      {detail.highlights && detail.highlights.length > 0 && (
        <dl
          className={`mb-7 grid grid-cols-2 gap-2.5 ${detail.highlights.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"}`}
        >
          {detail.highlights.map((item) => (
            <div key={item.label} className="rounded-xl border border-line bg-card px-3.5 py-3">
              <dt className="text-caption text-muted">{item.label}</dt>
              <dd className="mt-1 whitespace-nowrap font-mono text-body font-bold tabular-nums text-accent">{item.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <div>
        {detail.sections.map((section) => (
          <DetailSection key={section.title} section={section} />
        ))}
      </div>
    </ProjectDetailButton>
  );
}
