import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

type SectionProps = { id: string; title: string; children: ReactNode };

// 앵커(id)·제목·본문 간격만 책임진다. 내용은 children이 결정
export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="mt-24">
      <SectionHeading id={headingId} title={title} />
      <div className="mt-10">{children}</div>
    </section>
  );
}
