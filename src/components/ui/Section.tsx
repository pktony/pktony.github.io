import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

type SectionProps = { id: string; title: string; action?: ReactNode; children: ReactNode };

// 앵커(id)·제목·본문 간격만 책임진다. 내용은 children이, 제목 줄 오른쪽 도구는 action이 결정
export function Section({ id, title, action, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="mt-section">
      <SectionHeading id={headingId} title={title} action={action} />
      <div className="mt-section-body">{children}</div>
    </section>
  );
}
