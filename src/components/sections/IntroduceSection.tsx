import { Rich } from "@/components/ui/Rich";
import { Section } from "@/components/ui/Section";

type IntroduceSectionProps = { name: string; title: string; paragraphs: string[] };

export function IntroduceSection({ name, title, paragraphs }: IntroduceSectionProps) {
  return (
    <Section id="introduce" title="Introduce">
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
    </Section>
  );
}
