"use client";

import { FileDownIcon } from "@/components/icons/FileDownIcon";
import { printPage } from "@/lib/printPage";

type PdfExportButtonProps = { fileTitle: string };

// 현재 페이지를 PDF로 저장 (인쇄 대화상자에서 "PDF로 저장" 선택). 화면 크기와 상관없이 항상 보이고, 인쇄물에는 나오지 않는다.
export function PdfExportButton({ fileTitle }: PdfExportButtonProps) {
  return (
    <button
      type="button"
      onClick={() => printPage(fileTitle)}
      title="인쇄 대화상자에서 'PDF로 저장'을 선택하세요"
      className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-line px-4 text-meta font-medium text-muted hover:border-accent hover:text-accent print:hidden"
    >
      <FileDownIcon />
      PDF로 저장
    </button>
  );
}
