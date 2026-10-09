import { SocialIcon } from "@/components/icons/SocialIcon";
import { IconLinkButton } from "@/components/ui/IconLinkButton";
import type { Social } from "@/types/resume";

export function SocialLinks({ socials }: { socials: Social[] }) {
  return (
    <>
      {socials.map((s) => (
        <IconLinkButton key={s.url} href={s.url} label={s.label} external>
          <SocialIcon name={s.icon} />
        </IconLinkButton>
      ))}
    </>
  );
}
