import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { Section } from "@/components/ui/Section";
import type { Experience } from "@/types/resume";

export function ExperienceSection({ items }: { items: Experience[] }) {
  return (
    <Section id="experience" eyebrow="01 / 경력" title="Experience">
      <ol className="space-y-14">
        {items.map((e) => (
          <ExperienceItem key={e.company} experience={e} />
        ))}
      </ol>
    </Section>
  );
}
