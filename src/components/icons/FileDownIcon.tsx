import { IconBase } from "./IconBase";

// 문서 + 아래 화살표 (PDF 저장)
export function FileDownIcon({ size }: { size?: number }) {
  return (
    <IconBase size={size}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M12 11v6m0 0-2.5-2.5M12 17l2.5-2.5" />
    </IconBase>
  );
}
