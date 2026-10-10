"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  leading?: ReactNode;
  children: ReactNode;
};

// 범용 모달. 브라우저 기본 <dialog>가 Esc 닫기, 포커스 가두기, 닫을 때 포커스 복귀를 처리한다.
// 바깥(배경) 클릭 닫기와 배경 스크롤 잠금만 더한다. 640px 이하에서는 전체 화면 시트가 된다
export function Dialog({ open, onClose, title, subtitle, leading, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  useBodyScrollLock(open);

  // 열림 상태를 <dialog>에 맞춘다
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Esc 등 어떤 경로로 닫혀도 부모 상태를 맞춘다. React의 onClose 속성 대신 네이티브 close 이벤트를 직접 듣는다
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handleClose = () => onCloseRef.current();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto max-h-[min(88vh,56rem)] w-[min(54rem,calc(100%-2rem))] flex-col overflow-hidden rounded-2xl border border-line bg-canvas p-0 text-ink shadow-2xl backdrop:bg-scrim open:flex open:animate-dialog-in max-sm:h-full max-sm:max-h-full max-sm:w-full max-sm:max-w-full max-sm:rounded-none max-sm:border-0 print:hidden"
    >
      <header className="flex flex-none items-center gap-3 border-b border-line px-5 py-4">
        {leading}
        <h2 id={titleId} className="min-w-0 flex-1 text-subtitle font-bold">
          {title}
          {subtitle && <span className="block text-meta font-normal text-muted">{subtitle}</span>}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="grid h-11 w-11 flex-none place-items-center rounded-full text-muted hover:bg-card hover:text-ink"
        >
          <CloseIcon size={20} />
        </button>
      </header>
      <div className="overflow-y-auto overscroll-contain px-6 pb-8 pt-6 max-sm:px-4">{children}</div>
    </dialog>
  );
}
