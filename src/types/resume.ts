export type SocialIconName = "github" | "tistory";

export type Social = { label: string; url: string; icon: SocialIconName };
export type NavItem = { href: string; label: string };
export type Credential = { title: string; period: string };
export type SkillGroup = { label: string; items: string[] };
export type DetailImage = { src: string; alt: string; width: number; height: number; caption?: string };
export type DetailSection = { title: string; bullets: string[]; images?: DetailImage[] };
export type ProjectDetail = { sections: DetailSection[] };
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
  bullets: string[];
};

export type Project = {
  name: string;
  icon?: string; // 공식 아이콘(스토어·사이트 파비콘) 이미지 경로
  period?: string;
  role?: string;
  summary: string;
  bullets: string[];
  tech: string[];
  links: ProjectLink[];
  details?: ProjectDetail; // 있으면 "상세 보기" 모달이 붙는다
  kind: "work" | "personal"; // work: 회사 프로젝트, personal: 개인 프로젝트 섹션에 모아 보여준다
};

export type ProjectGroup = {
  title: string;
  icon?: string; // 공식 아이콘(스토어·사이트 파비콘) 이미지 경로
  period: string;
  role?: string;
  summary: string;
  serviceStats?: ServiceStats;
  links: ProjectLink[];
  details?: ProjectDetail;
  projects: Project[];
};

