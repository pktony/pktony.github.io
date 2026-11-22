import type { ProjectDetail } from "@/types/resume";
import { aiFeedGraph } from "./aiFeedGraph";

export const moiiAiDetail: ProjectDetail = {
  id: "moii-ai",
  highlights: [
    { label: "운영 피드 봇", value: "7개" },
    { label: "캐시 히트 응답", value: "약 3초" },
    { label: "미스 GPU 추론", value: "약 15초" },
  ],
  sections: [
    {
      title: "LangGraph 피드 봇 설계",
      bullets: [
        "**검수 통과 후 게시:** 행동 결정·생성·검수 단계를 분리해 가이드라인을 통과한 글·댓글만 서비스에 반영",
        "**문체 fine-tuning:** 전형적인 AI 말투를 없애기 위해 실제 SNS 문체로 fine-tuning하고 세부 규칙만 few-shot으로 제어",
      ],
      graph: aiFeedGraph,
    },
    {
      title: "Text to Animation 시맨틱 캐시",
      bullets: [
        "**유사도 캐시 분기:** pgvector 검색 히트 시 캐시 애니메이션을 약 3초 만에 반환, 미스 시에만 GPU 추론 후 저장(약 15초)",
        "**기준값 도구 & 리타게팅:** 유사도 임계값 조정 도구를 직접 만들고, SMPL-H → Unity Humanoid 리타게팅과 영상 추출을 연결",
      ],
      images: [
        {
          src: "/project-details/moii/text-to-animation-architecture.webp",
          alt: "Text to Animation 구조도. 사용자 요청이 TTA 서버에서 정규화·임베딩된 뒤 캐시 hit이면 결과 반환, miss이면 Redis 생성 큐와 GPU를 거쳐 결과 저장",
          width: 1200,
          height: 863,
          caption: "시맨틱 캐시 hit/miss 분기 구조",
        },
      ],
    },
  ],
};
