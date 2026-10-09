import { Rich } from "@/components/ui/Rich";
import { Section } from "@/components/ui/Section";

type IntroduceSectionProps = { name: string; title: string; paragraphs: string[] };

export function IntroduceSection({ name, title, paragraphs }: IntroduceSectionProps) {
  return (
    <Section id="introduce" eyebrow="00 / 소개" title="Introduce">
      <p className="text-xl font-bold">
        {name} <span className="font-medium text-[var(--muted)]">· {title}</span>
      </p>
      <div className="mt-4 max-w-[68ch] space-y-5 text-[17px]">
        {paragraphs.map((p) => (
          <p key={p}>
            <Rich text={p} />
          </p>
        ))}
      </div>
    </Section>
  );
}
