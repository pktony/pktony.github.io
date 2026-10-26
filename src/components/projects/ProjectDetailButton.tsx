"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ExpandIcon } from "@/components/icons/ExpandIcon";
import { Dialog } from "@/components/ui/Dialog";
import { trackEvent } from "@/lib/analytics";
import { ProjectIcon } from "./ProjectIcon";

type ProjectDetailButtonProps = {
  detailId: string;
  href: string;
  name: string;
  subtitle?: string;
  icon?: string;
  children: ReactNode;
};

// 상세 링크와 모달의 상태를 URL에 맞춘다. PDF의 링크로 접속해도 같은 상세가 열린다.
// 닫으면 내용을 내려서(영상 재생기 포함) 백그라운드 재생과 불필요한 로딩을 막는다.
export function ProjectDetailButton({ detailId, href, name, subtitle, icon, children }: ProjectDetailButtonProps) {
  const [open, setOpen] = useState(false);
  const openedFromLink = useRef(false);
  const hash = `#detail-${detailId}`;

  useEffect(() => {
    const syncFromUrl = () => {
      const matches = window.location.hash === hash;
      if (!matches) openedFromLink.current = false;
      setOpen(matches);
    };
    syncFromUrl();
    window.addEventListener("hashchange", syncFromUrl);
    return () => window.removeEventListener("hashchange", syncFromUrl);
  }, [hash]);

  const close = () => {
    if (!open) return;
    if (window.location.hash === hash) {
      if (openedFromLink.current) {
        window.history.back();
      } else {
        // PDF 등 외부 링크로 바로 접속했다면 이전 사이트로 보내지 않고 상세만 닫는다.
        window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}#projects`);
      }
    }
    setOpen(false);
  };

  return (
    <>
      <a
        id={`detail-${detailId}`}
        href={href}
        data-project-detail
        aria-haspopup="dialog"
        onClick={(event) => {
          // 새 탭 열기와 링크 주소 복사 등 브라우저 기본 링크 동작은 유지한다.
          if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          trackEvent("view_project_detail", { project: name });
          openedFromLink.current = window.location.hash !== hash;
          window.location.hash = hash;
          setOpen(true);
        }}
        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-meta font-semibold text-muted hover:border-accent hover:text-accent print:mt-3 print:min-h-0 print:py-0.5 print:text-caption"
      >
        상세 보기
        <ExpandIcon size={16} />
      </a>
      <Dialog
        open={open}
        onClose={close}
        title={name}
        subtitle={subtitle}
        leading={icon ? <ProjectIcon src={icon} /> : undefined}
      >
        {open ? children : null}
      </Dialog>
    </>
  );
}
