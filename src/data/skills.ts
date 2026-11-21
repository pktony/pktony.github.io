import type { SkillGroup } from "@/types/resume";

export const skills: SkillGroup[] = [
  { label: "AI", items: ["LLM Evaluation", "MCP", "LangGraph", "Semantic Cache", "Python", "MediaPipe"] },
  { label: "Backend / Web", items: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Prisma", "MongoDB", "Supabase", "Redis", "OAuth 2.1", "Toss Payments"] },
  { label: "Infra / Ops", items: ["AWS (S3·CloudFront·Lambda·EC2·Athena)", "Docker", "Kubernetes", "Helm", "Jenkins", "GitHub Actions", "Sentry", "Prometheus", "Grafana", "Elasticsearch", "Kibana"] },
  { label: "Unity / 3D Client", items: ["Unity", "C#", "Blender(Python)", "Three.js", "Memory Profiler", "Addressables", "Protobuf", "iOS·Android 네이티브 연동"] },
];
