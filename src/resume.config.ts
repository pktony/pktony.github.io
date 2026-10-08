// 이력서 내용은 이 파일 하나만 고치면 됩니다.
export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};
export type Project = { name: string; summary: string; link?: string; tech: string[] };
export type SkillGroup = { label: string; items: string[] };
export type Post = { title: string; url: string };

export const resume = {
  name: "박상원",
  title: "TODO: 직무/한 줄 소개",
  photo: "", // public/ 아래 이미지 경로 (예: "/profile.jpg")
  socials: [{ label: "GitHub", url: "https://github.com/pktony" }],
  intro: ["TODO: 소개 문단"],
  education: [] as { school: string; major: string; period: string }[],
  experience: [] as Experience[],
  projects: [] as Project[],
  skills: [] as SkillGroup[],
  writing: [] as Post[],
};
