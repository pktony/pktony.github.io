export type SocialIconName = "github" | "tistory";

export type Social = { label: string; url: string; icon: SocialIconName };
export type NavItem = { href: string; label: string };
export type Metric = { value: string; label: string };
export type Credential = { title: string; period: string };
export type SkillGroup = { label: string; items: string[] };
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
  icon?: string; // 공식 아이콘(스토어·사이트 파비콘) 이미지 경로
  label?: string; // 제목 옆 성격 표시(예: 개인 프로젝트)
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
  icon?: string; // 공식 아이콘(스토어·사이트 파비콘) 이미지 경로
  period: string;
  role?: string;
  summary: string;
  links: ProjectLink[];
  projects: Project[];
};

