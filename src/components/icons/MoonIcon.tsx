import { IconBase } from "./IconBase";

// 라이트 모드에서 표시 (다크로 전환 가능함을 의미). 표시 여부는 globals.css의 .icon-moon 규칙이 결정
export function MoonIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size} className="icon-moon">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </IconBase>
  );
}
