import type { Profile } from "@/types/resume";

// **굵게** 표기 지원
export const profile: Profile = {
  photo: { src: "/profile.webp", alt: "벽화 앞을 걷고 있는 박상원", width: 480, height: 600 },
  name: "박상원",
  handle: "pktony.github.io",
  title: "AI Product Engineer",
  email: "pktony2011@gmail.com",
  siteUrl: "https://pktony.github.io",
  intro: [
    "**서비스와 현장에서 막힌 문제를 측정하고 끝까지 고쳐왔습니다.** 콘텐츠 반영을 ==3일 → 5분==으로 줄였고, 14만 명이 몰린 프로모션 위젯을 30일간 중단 없이 운영했습니다.",
    "AI의 불확실성과 비용은 **평가와 코드로 통제**합니다. 모델 평가로 LLM 비용을 ==1/46==로 줄였고, 실패한 AI 결과는 자동 검수·환불로 관리했습니다. 항공기 형식인증 엔지니어 출신으로, 고친 뒤에는 **검증 근거**를 남깁니다.",
  ],
};
