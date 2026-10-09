import type { Photo } from "@/types/resume";

// 소개 영역 프로필 사진.
// 모바일: 4:5 비율 고정 / 데스크톱: 옆 소개글의 높이에 맞춰 늘어난다 (이미지는 absolute라 행 높이를 키우지 않음)
export function ProfilePhoto({ photo }: { photo: Photo }) {
  return (
    <div className="relative aspect-[4/5] w-44 overflow-hidden rounded-2xl border border-[var(--line)] sm:w-56 md:aspect-auto md:w-64 lg:w-72">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
      />
    </div>
  );
}
