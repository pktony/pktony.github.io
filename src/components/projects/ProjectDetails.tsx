import type { ProjectDetail } from "@/types/resume";
import { DetailSection } from "./DetailSection";
import { ProjectDetailButton } from "./ProjectDetailButton";

type ProjectDetailsProps = { name: string; subtitle?: string; icon?: string; detail?: ProjectDetail };

// 상세가 있는 프로젝트에만 "상세 보기" 버튼과 모달을 붙인다. 프로젝트 카드와 그룹 헤더가 같이 쓴다
export function ProjectDetails({ name, subtitle, icon, detail }: ProjectDetailsProps) {
  if (!detail || detail.sections.length === 0) return null;
  return (
    <ProjectDetailButton name={name} subtitle={subtitle} icon={icon}>
      {detail.sections.map((section) => (
        <DetailSection key={section.title} section={section} />
      ))}
    </ProjectDetailButton>
  );
}
