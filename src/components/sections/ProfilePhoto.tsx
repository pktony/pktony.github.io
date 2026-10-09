import type { Photo } from "@/types/resume";

type ProfilePhotoProps = { photo: Photo; className?: string };

// 4:5 프로필 사진. 크기와 배치(float 등)는 호출하는 쪽이 className으로 정한다
export function ProfilePhoto({ photo, className = "" }: ProfilePhotoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      fetchPriority="high"
      decoding="async"
      className={`aspect-[4/5] rounded-2xl border border-[var(--line)] object-cover object-[50%_40%] ${className}`}
    />
  );
}
