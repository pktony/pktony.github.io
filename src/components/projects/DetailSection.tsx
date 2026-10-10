import { BulletList } from "@/components/ui/BulletList";
import type { DetailSection as DetailSectionData } from "@/types/resume";
import { DetailImages } from "./DetailImages";

// 모달 안 소제목 하나: 제목 + 불릿 + 사진
export function DetailSection({ section }: { section: DetailSectionData }) {
  return (
    <section className="mt-8 first:mt-0">
      <h3 className="text-subtitle font-bold">{section.title}</h3>
      {section.bullets.length > 0 && <BulletList items={section.bullets} className="mt-2 max-w-measure" />}
      {section.images && <DetailImages images={section.images} />}
    </section>
  );
}
