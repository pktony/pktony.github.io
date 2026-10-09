import { IconBase } from "./IconBase";

// 다크 모드에서 표시 (라이트로 전환 가능함을 의미). 표시 여부는 globals.css의 .icon-sun 규칙이 결정
export function SunIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size} className="icon-sun">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </IconBase>
  );
}
