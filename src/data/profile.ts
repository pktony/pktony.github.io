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
    "**서비스와 팀에서 막힌 문제를 해결해왔습니다.** 콘텐츠 반영에 최대 3일이 걸리던 피드는 웹뷰로 바꿔 ==5분==으로 줄였습니다. NCT WISH 프로모션에서는 에셋을 바꿀 때마다 개발자를 거쳐야 하는 문제를 기획자용 제작 도구로 풀었고 30일간 ==14만 명==이 쓰는 동안 서비스 중단이 없었습니다. AI가 틀린 결과를 내는 문제는 코드로 검사해 막습니다. Moiime에서는 요청에 맞는 옷 비율을 ==50% → 91%==로 올렸고 UMZIK에서는 깨진 결과를 실패와 환불로 처리해 최종 실패율을 ==2.1%==로 관리했습니다.",
    "항공기 형식인증 엔지니어로 일하며 배운 대로, 먼저 측정하고 고친 뒤에는 **검증 근거와 변경 이력**을 남깁니다.",
  ],
};
