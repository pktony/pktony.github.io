import { Rich } from "@/components/ui/Rich";
import { Section } from "@/components/ui/Section";
import type { Photo } from "@/types/resume";
import { ProfilePhoto } from "./ProfilePhoto";

type IntroduceSectionProps = { photo: Photo; name: string; title: string; paragraphs: string[] };

// 사진 + 소개글. 좁은 화면에서는 사진이 위, 넓은 화면에서는 왼쪽
export function IntroduceSection({ photo, name, title, paragraphs }: IntroduceSectionProps) {
  return (
    <Section id="introduce" title="Introduce">
      <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-10">
        <ProfilePhoto photo={photo} />
        <div>
          <p className="text-xl font-bold">
            {name} <span className="font-medium text-[var(--muted)]">· {title}</span>
          </p>
          <div className="mt-5 max-w-[var(--measure)] space-y-6">
            {paragraphs.map((p) => (
              <p key={p}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
