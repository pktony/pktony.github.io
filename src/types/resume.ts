export type SocialIconName = "github" | "blog";

export type Social = { label: string; url: string; icon: SocialIconName };
export type NavItem = { href: string; label: string };
export type Metric = { value: string; label: string };
export type Credential = { title: string; period: string };
export type SkillGroup = { label: string; items: string[] };
export type ProjectLink = { label: string; url: string };

export type Profile = {
  name: string;
  handle: string;
  title: string;
  email: string;
  intro: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  badges: string[];
  bullets: string[];
  metrics: Metric[];
};

export type Project = {
  name: string;
  period: string;
  role: string;
  summary: string;
  bullets: string[];
  tech: string[];
  links: ProjectLink[];
  featured: boolean;
};
