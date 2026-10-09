import { projectIconRegistry } from "@/components/icons/projectIconRegistry";
import type { ProjectIconName } from "@/types/resume";

// 프로젝트를 한눈에 구분하는 아이콘 타일 (장식용)
export function ProjectIcon({ name }: { name: ProjectIconName }) {
  const Icon = projectIconRegistry[name];
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--chip)] text-[var(--chip-fg)]">
      <Icon size={22} />
    </span>
  );
}
