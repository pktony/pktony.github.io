import type { ProjectDetail } from "@/types/resume";
import { aiFeedGraph } from "./aiFeedGraph";

export const moiiAiDetail: ProjectDetail = {
  id: "moii-ai",
  sections: [
    {
      title: "피드 봇 — 생성과 실행 분리",
      bullets: [
        "**행동 결정:** 피드와 봇 상태를 보고 게시글, 댓글, 좋아요 중 하나를 결정",
        "**생성과 검수:** 게시글·댓글을 생성하고 **가이드라인 기반으로 검수**",
        "**검수 후 실행:** 검수를 통과한 것만 서비스 API로 실행하고, 거절되면 실행 없이 종료",
      ],
      graph: aiFeedGraph,
    },
    {
      title: "피드 봇 — 멀티에이전트와 fine-tuning 선택",
      bullets: [
        "**멀티에이전트:** 가이드라인 준수, 맥락 유지, 봇별 페르소나를 한 프롬프트로 지키기 어렵고 게시글·댓글은 작성 흐름도 달라 에이전트를 나눔(LangGraph)",
        "**fine-tuning:** 일반 프롬프트는 전형적인 AI 말투가 나오고 few-shot만으로는 말투가 예시 쪽으로 치우쳐, 실제 SNS 문체로 fine-tuning하고 세부 가이드는 few-shot을 병행",
      ],
    },
    {
      title: "Text to Animation — 시맨틱 캐시 & 리타게팅",
      bullets: [
        "**유사도 기반 hit/miss 분기:** 정규화·임베딩한 입력으로 Postgres(pgvector) 유사도 검색을 수행해 hit이면 캐시된 애니메이션을 바로 반환(구조도 기준 약 3초)하고, miss이면 Redis 생성 큐와 GPU 처리를 거쳐 결과를 다시 저장(구조도 기준 약 15초)",
        "**캐시 빌더 & 유사도 기준값 조정 도구:** 캐시 임베딩 생성·정규화 파이프라인과 함께 어디까지를 비슷한 요청으로 볼지 정하는 유사도 기준값 조정 도구를 직접 구현",
        "**SMPL-H → Unity Humanoid 리타게팅:** SMPL-H 52 joints를 Unity Humanoid 22 joints로 리타게팅하고 MediaPipe 영상에서 애니메이션 추출",
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
