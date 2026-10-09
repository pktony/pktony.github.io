import { displayUrl } from "@/lib/displayUrl";

// 화면에서는 숨기고 인쇄·PDF에서만 보이는 사이트 주소 (출처 표시)
export function PrintSiteUrl({ url }: { url: string }) {
  return <span className="hidden font-mono text-sm text-[var(--muted)] print:inline">{displayUrl(url)}</span>;
}
