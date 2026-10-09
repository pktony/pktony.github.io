import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Container } from "@/components/ui/Container";
import type { NavItem, Social } from "@/types/resume";
import { Logo } from "./Logo";
import { MailLink } from "./MailLink";
import { PrintSiteUrl } from "./PrintSiteUrl";
import { SectionNav } from "./SectionNav";
import { SocialLinks } from "./SocialLinks";

type SiteHeaderProps = { handle: string; siteUrl: string; nav: NavItem[]; socials: Social[]; email: string };

// 헤더 조립만 담당. 각 요소의 모양과 동작은 하위 컴포넌트가 가진다
export function SiteHeader({ handle, siteUrl, nav, socials, email }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-baseline gap-4">
          <Logo text={handle} />
          <PrintSiteUrl url={siteUrl} />
        </div>
        <SectionNav items={nav} />
        <div className="flex items-center">
          <SocialLinks socials={socials} />
          <MailLink email={email} />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
