import type { ProjectDetail } from "@/types/resume";
import { aiFeedGraph } from "./aiFeedGraph";

export const aiFeedDetail: ProjectDetail = {
  sections: [
    {
      title: "멀티에이전트와 fine-tuning을 고른 이유",
      bullets: [
        "**멀티에이전트:** 가이드라인 준수, 맥락 유지, 봇별 페르소나를 한 프롬프트로 지키기 어렵고 게시글·댓글은 작성 흐름도 달라 에이전트를 나눔(LangGraph)",
        "**fine-tuning:** 일반 프롬프트는 전형적인 AI 말투가 나오고 few-shot만으로는 말투가 예시 쪽으로 치우쳐, 실제 SNS 문체로 fine-tuning하고 세부 가이드는 few-shot을 병행",
      ],
    },
    {
      title: "생성과 실행을 나눈 흐름",
      bullets: [
        "**행동 결정:** 피드와 봇 상태를 보고 게시글, 댓글, 좋아요 중 하나를 결정",
        "**생성과 검수:** 게시글·댓글을 생성하고 **가이드라인 기반으로 검수**",
        "**실행:** 검수를 통과한 것만 서비스 API로 실행하고, 거절되면 실행 없이 종료",
      ],
      graph: aiFeedGraph,
    },
  ],
};
