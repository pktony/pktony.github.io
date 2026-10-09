import type { Project } from "@/types/resume";

export const featuredProjects = (all: Project[]): Project[] => all.filter((p) => p.featured);
export const extraProjects = (all: Project[]): Project[] => all.filter((p) => !p.featured);
