import type { Profile } from "@/types/resume";

// **굵게** 표기 지원
export const profile: Profile = {
  photo: { src: "/profile.webp", alt: "벽화 앞을 걷고 있는 박상원", width: 480, height: 600 },
  name: "박상원",
  handle: "pktony.github.io",
  title: "AI Product Engineer · FDE",
  email: "pktony2011@gmail.com",
  siteUrl: "https://pktony.github.io",
  intro: [
    "**서비스와 현장에서 막힌 문제를 끝까지 해결해왔습니다.** 콘텐츠 반영에 최대 3일이 걸리던 피드는 웹뷰로 바꿔 ==5분==으로 줄였고, NCT WISH 프로모션에서는 기획자용 제작 도구와 MCP로 개발자 병목을 없애 30일간 ==14만 명==이 쓰는 동안 중단 없이 운영했습니다. AI의 불확실성과 비용은 측정과 코드로 통제합니다. Moiime에서는 골든셋 ==121건== 평가로 모델 적중률을 ==85% → 95%==로 높이고 비용을 ==1/46==로 줄였으며, UMZIK에서는 깨진 생성 결과를 실패와 환불로 처리해 최종 실패율을 ==2.1%==로 관리했습니다.",
    "항공기 형식인증 엔지니어로 일하며 배운 대로, 먼저 측정하고 고친 뒤에는 **검증 근거와 변경 이력**을 남깁니다.",
  ],
};
