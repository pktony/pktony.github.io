export type SocialIconName = "github" | "tistory";

export type Social = { label: string; url: string; icon: SocialIconName };
export type NavItem = { href: string; label: string };
export type Metric = { value: string; label: string };
export type Credential = { title: string; period: string };
export type SkillGroup = { label: string; items: string[] };
// 공식 아이콘: 스토어·사이트 파비콘 이미지, 또는 소셜 로고(공개 저장소만 있는 프로젝트)
export type ProjectIconName = { type: "image"; src: string } | { type: "social"; name: SocialIconName };
export type ProjectLink = { label: string; url: string };

export type Photo = { src: string; alt: string; width: number; height: number };

export type Profile = {
  photo: Photo;
  name: string;
  handle: string;
  title: string;
  email: string;
  siteUrl: string;
  intro: string[];
};

export type ServiceStat = { value: string; label: string };
export type ServiceStats = { title: string; items: ServiceStat[] };

export type Experience = {
  company: string;
  role: string;
  period: string;
  badges: string[];
  serviceStats?: ServiceStats;
  bullets: string[];
  metrics: Metric[];
};

export type Project = {
  name: string;
  icon?: ProjectIconName;
  period?: string;
  role?: string;
  summary: string;
  bullets: string[];
  tech: string[];
  links: ProjectLink[];
  featured: boolean;
};

export type ProjectGroup = {
  title: string;
  icon?: ProjectIconName;
  period: string;
  role?: string;
  summary: string;
  links: ProjectLink[];
  projects: Project[];
};

