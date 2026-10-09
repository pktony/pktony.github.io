export type SocialIconName = "github" | "tistory";

export type Social = { label: string; url: string; icon: SocialIconName };
export type NavItem = { href: string; label: string };
export type Metric = { value: string; label: string };
export type Credential = { title: string; period: string };
export type SkillGroup = { label: string; items: string[] };
export type ProjectIconName = "avatar" | "map" | "widget" | "sprite" | "cube" | "grid";
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

