import type { DetailImage } from "@/types/resume";
import { DetailFigure } from "./DetailFigure";

// 가로가 세로의 3배를 넘는 띠 모양 사진(예: 스프라이트 시트)은 한 줄을 다 쓴다
const WIDE_RATIO = 3;
const isWide = (image: DetailImage) => image.width / image.height > WIDE_RATIO;

// 한 장이면 큰 사진 하나. 여러 장이면 갤러리: 띠 모양 사진이 없는 3장은 한 줄에, 그 밖에는 2열(좁은 화면에서는 한 줄씩)
export function DetailImages({ images }: { images: DetailImage[] }) {
  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="mt-4">
        <DetailFigure image={images[0]} />
      </div>
    );
  }
  const threeAcross = images.length === 3 && !images.some(isWide);
  return (
    <div className={`mt-4 grid items-start gap-3 ${threeAcross ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
      {images.map((image) => (
        <div key={image.src} className={isWide(image) ? "sm:col-span-2" : undefined}>
          <DetailFigure image={image} />
        </div>
      ))}
    </div>
  );
}
