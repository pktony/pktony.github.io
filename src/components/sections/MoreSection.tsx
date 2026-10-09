import { CredentialColumn } from "@/components/credentials/CredentialColumn";
import { Section } from "@/components/ui/Section";
import type { Credential } from "@/types/resume";

type MoreSectionProps = { education: Credential[]; awards: Credential[]; certificates: Credential[] };

export function MoreSection({ education, awards, certificates }: MoreSectionProps) {
  return (
    <Section id="more" title="Education & More">
      <div className="grid gap-10 md:grid-cols-3">
        <CredentialColumn heading="Education" items={education} />
        <CredentialColumn heading="Awards" items={awards} />
        <CredentialColumn heading="Certificates" items={certificates} />
      </div>
    </Section>
  );
}
