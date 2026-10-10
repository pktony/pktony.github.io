import type { DetailImage } from "@/types/resume";

// 사진 한 장과 캡션. 폭·높이를 지정하고 지연 로딩해 모달을 열기 전에는 내려받지 않는다.
// 원본 크기보다 크게 늘리지 않는다(maxWidth)
export function DetailFigure({ image }: { image: DetailImage }) {
  return (
    <figure style={{ maxWidth: image.width }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="h-auto w-full rounded-xl border border-line"
      />
      {image.caption && <figcaption className="mt-2 text-meta text-muted">{image.caption}</figcaption>}
    </figure>
  );
}
