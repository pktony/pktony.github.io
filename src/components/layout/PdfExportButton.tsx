"use client";

import { FileDownIcon } from "@/components/icons/FileDownIcon";
import { printPage } from "@/lib/printPage";

type PdfExportButtonProps = { fileTitle: string };

// 현재 페이지를 PDF로 저장 (인쇄 대화상자에서 "PDF로 저장" 선택). 인쇄물에는 나오지 않는다.
export function PdfExportButton({ fileTitle }: PdfExportButtonProps) {
  return (
    <button
      type="button"
      onClick={() => printPage(fileTitle)}
      aria-label="PDF로 저장"
      title="PDF로 저장 (인쇄 대화상자에서 'PDF로 저장' 선택)"
      className="hidden h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--fg)] sm:inline-flex print:hidden"
    >
      <FileDownIcon />
      <span>PDF</span>
    </button>
  );
}
