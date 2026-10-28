import { PageTitle } from "@/components/layout/PageTitle";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { IntroduceSection } from "@/components/sections/IntroduceSection";
import { MoreSection } from "@/components/sections/MoreSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ThemeInitScript } from "@/components/theme/ThemeInitScript";
import { Container } from "@/components/ui/Container";
import { SkipLink } from "@/components/ui/SkipLink";
import { awards } from "@/data/awards";
import { certificates } from "@/data/certificates";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { projectGroups } from "@/data/projectGroups";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { socials } from "@/data/socials";
import { personalProjects, workProjects } from "@/lib/projectSelectors";

// 데이터를 각 섹션에 연결하는 조립만 한다
export default function Home() {
  return (
    <>
      <ThemeInitScript />
      <SkipLink href="#main">본문으로 건너뛰기</SkipLink>
      <SiteHeader handle={profile.handle} nav={navigation} socials={socials} email={profile.email} />
      <Container className="pb-24">
        <main id="main" tabIndex={-1}>
        <PageTitle>{`${profile.name} 포트폴리오`}</PageTitle>
        <div id="top" />
        <IntroduceSection pdfFileTitle={`${profile.name} 포트폴리오`} photo={profile.photo} name={profile.name} title={profile.title} paragraphs={profile.intro} />
        <p className="mt-block print:hidden"><a className="inline-flex min-h-11 items-center rounded-lg border border-line px-4 text-meta font-semibold text-accent hover:bg-card" href="/games/">게임 갤러리에서 프로젝트 둘러보기 →</a></p>
        <ExperienceSection items={experience} />
        <ProjectsSection groups={projectGroups} work={workProjects(projects)} personal={personalProjects(projects)} />
        <SkillsSection groups={skills} />
        <MoreSection education={education} awards={awards} certificates={certificates} />
        </main>
        <SiteFooter name={profile.name} email={profile.email} siteUrl={profile.siteUrl} year={new Date().getFullYear()} />
      </Container>
    </>
  );
}
