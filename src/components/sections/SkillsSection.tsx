import { SkillRow } from "@/components/skills/SkillRow";
import { Section } from "@/components/ui/Section";
import type { SkillGroup } from "@/types/resume";

export function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-[10rem_1fr]">
        {groups.map((g) => (
          <SkillRow key={g.label} group={g} />
        ))}
      </dl>
    </Section>
  );
}
