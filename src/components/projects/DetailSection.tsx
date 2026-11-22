import { BulletList } from "@/components/ui/BulletList";
import type { DetailSection as DetailSectionData } from "@/types/resume";
import { DetailImages } from "./DetailImages";
import { FlowGraph } from "./FlowGraph";
import { DetailVideo } from "./DetailVideo";
import { RetargetingDiagram } from "./RetargetingDiagram";

// 모달 안 소제목 하나: 제목 + 불릿 + 영상 + 사진 + 흐름도
export function DetailSection({ section }: { section: DetailSectionData }) {
  return (
    <section className="mt-7 border-t border-line pt-7 first:mt-0 first:border-t-0 first:pt-0">
      <h3 className="text-subtitle font-bold">{section.title}</h3>
      {section.bullets.length > 0 && <BulletList items={section.bullets} className="mt-3 max-w-measure" />}
      {section.videos?.map((video) => (
        <div key={video.youtubeId} className="mt-4">
          <DetailVideo video={video} />
        </div>
      ))}
      {section.images && <DetailImages images={section.images} />}
      {section.graph && (
        <div className="mt-4">
          <FlowGraph graph={section.graph} />
        </div>
      )}
      {section.diagram === "moiime-retargeting" && (
        <div className="mt-4">
          <RetargetingDiagram />
        </div>
      )}
    </section>
  );
}
