import type { ProjectDetail } from "@/types/resume";

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
        "행동을 결정한 뒤 게시글·댓글은 생성하고 **가이드라인 검수**를 통과한 것만 실행. 거절되면 실행 없이 종료",
        "반응은 생성이 필요 없어 바로 실행",
        "프롬프트·설정 변경은 dev에서 검증한 뒤 live에 반영하도록 환경을 분리",
      ],
    },
  ],
};
