import type { SkillGroup } from "@/types/resume";

export const skills: SkillGroup[] = [
  { label: "Unity Client", items: ["Unity", "C#", "Memory Profiler", "Addressables", "URP", "iOS·Android 네이티브 연동"] },
  { label: "Backend / Web", items: ["NestJS", "Next.js", "Tailwind CSS v4", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "MongoDB", "결제 연동"] },
  { label: "Infra / Ops", items: ["AWS (S3·CloudFront·Lambda·EC2·Athena)", "Jenkins", "Prometheus", "Grafana", "Fluent Bit", "Elasticsearch", "Kibana"] },
  { label: "AI", items: ["LangGraph", "Semantic Cache", "MCP", "Python", "MediaPipe"] },
];
