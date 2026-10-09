// 프로젝트를 한눈에 구분하는 공식 아이콘 (장식용)
export function ProjectIcon({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={40}
      height={40}
      decoding="async"
      className="h-10 w-10 shrink-0 rounded-xl border border-[var(--line)] object-cover"
    />
  );
}
