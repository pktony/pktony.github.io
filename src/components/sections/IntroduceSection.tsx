import { PdfExportButton } from "@/components/layout/PdfExportButton";
import { Rich } from "@/components/ui/Rich";
import { Section } from "@/components/ui/Section";
import type { Photo } from "@/types/resume";
import { ProfilePhoto } from "./ProfilePhoto";

type IntroduceSectionProps = { photo: Photo; name: string; title: string; pdfFileTitle: string; paragraphs: string[] };

// sm 이상: 사진을 왼쪽에 띄우고(float) 글이 옆을 감싸다가 사진보다 길어지면 아래로 이어진다
// sm 미만: 옆 공간이 좁아 사진을 글 위에 둔다
export function IntroduceSection({ photo, name, title, pdfFileTitle, paragraphs }: IntroduceSectionProps) {
  return (
    <Section id="introduce" title="Introduce" action={<PdfExportButton fileTitle={pdfFileTitle} />}>
      <div className="flow-root max-w-[56rem]">
        <ProfilePhoto photo={photo} className="mb-6 block w-36 sm:float-left sm:mb-3 sm:mr-8 sm:w-44 md:w-48" />
        <p className="text-xl font-bold">
          {name} <span className="font-medium text-[var(--muted)]">· {title}</span>
        </p>
        <div className="mt-5 space-y-5">
          {paragraphs.map((p) => (
            <p key={p}>
              <Rich text={p} />
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
