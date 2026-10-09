import { MailIcon } from "@/components/icons/MailIcon";
import { IconLinkButton } from "@/components/ui/IconLinkButton";

export function MailLink({ email }: { email: string }) {
  return (
    <IconLinkButton href={`mailto:${email}`} label="이메일 보내기">
      <MailIcon />
    </IconLinkButton>
  );
}
