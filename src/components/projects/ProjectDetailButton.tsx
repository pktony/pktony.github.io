"use client";

import { useState, type ReactNode } from "react";
import { ExpandIcon } from "@/components/icons/ExpandIcon";
import { Dialog } from "@/components/ui/Dialog";
import { ProjectIcon } from "./ProjectIcon";

type ProjectDetailButtonProps = { name: string; subtitle?: string; icon?: string; children: ReactNode };

// "상세 보기" 버튼과 그 모달. 상태(열림 여부)만 책임지고, 모달 안 내용은 children이 정한다
export function ProjectDetailButton({ name, subtitle, icon, children }: ProjectDetailButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-meta font-semibold text-muted hover:border-accent hover:text-accent print:hidden"
      >
        상세 보기
        <ExpandIcon size={16} />
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={name}
        subtitle={subtitle}
        leading={icon ? <ProjectIcon src={icon} /> : undefined}
      >
        {children}
      </Dialog>
    </>
  );
}
