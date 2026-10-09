import { SocialIcon } from "@/components/icons/SocialIcon";
import type { ProjectIconName } from "@/types/resume";

const TILE = "h-10 w-10 shrink-0 rounded-xl";

// 프로젝트를 한눈에 구분하는 공식 아이콘 (장식용)
export function ProjectIcon({ icon }: { icon: ProjectIconName }) {
  if (icon.type === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={icon.src} alt="" width={40} height={40} decoding="async" className={`${TILE} border border-[var(--line)] object-cover`} />
    );
  }
  return (
    <span className={`${TILE} inline-flex items-center justify-center bg-[var(--chip)] text-[var(--chip-fg)]`}>
      <SocialIcon name={icon.name} />
    </span>
  );
}
