import type { SkillGroup } from "@/types/resume";

export const skills: SkillGroup[] = [
  { label: "AI", items: ["LangGraph", "Semantic Cache", "MCP", "Python", "MediaPipe"] },
  { label: "Unity Client", items: ["Unity", "C#", "Memory Profiler", "Addressables", "URP", "iOS·Android 네이티브 연동"] },
  { label: "Backend / Web", items: ["NestJS", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "MongoDB", "Redis", "결제 연동"] },
  { label: "Infra / Ops", items: ["AWS (S3·CloudFront·Lambda·EC2·Athena)", "Docker", "Kubernetes", "Helm", "Jenkins", "GitHub Actions", "Firebase", "Google Analytics", "Prometheus", "Grafana", "Fluent Bit", "Elasticsearch", "Kibana"] },
];
