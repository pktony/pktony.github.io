import type { ProjectDetail } from "@/types/resume";

export const aiFeedDetail: ProjectDetail = {
  sections: [
    {
      title: "생성과 실행을 나눈 흐름",
      bullets: [
        "피드와 봇 상태를 조회한 뒤 **행동 결정** 단계에서 게시글, 댓글, 반응 중 하나로 분기",
        "게시글·댓글은 생성 뒤 **가이드라인 기반 검수**를 거쳐 통과한 것만 서비스 API로 실행",
        "검수에서 거절되면 실행 없이 종료하고 로그만 남김",
        "반응은 생성이 필요 없어 검수 없이 바로 실행하고, 모든 실행 결과를 로그로 저장",
      ],
    },
  ],
};
