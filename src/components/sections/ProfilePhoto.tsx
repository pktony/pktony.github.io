import type { Photo } from "@/types/resume";

// 소개 영역 프로필 사진. 크기를 명시해 레이아웃 이동(CLS)을 막고 첫 화면이므로 우선 로드한다
export function ProfilePhoto({ photo }: { photo: Photo }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      fetchPriority="high"
      decoding="async"
      className="aspect-[4/5] w-40 rounded-2xl border border-[var(--line)] object-cover sm:w-52 md:w-56"
    />
  );
}
