import type { Project } from "@/types/resume";

export const workProjects = (all: Project[]): Project[] => all.filter((p) => p.kind === "work");
export const personalProjects = (all: Project[]): Project[] => all.filter((p) => p.kind === "personal");
