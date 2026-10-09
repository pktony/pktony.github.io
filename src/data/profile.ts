import type { Profile } from "@/types/resume";

// **굵게** 표기 지원
export const profile: Profile = {
  photo: { src: "/profile.webp", alt: "벽화 앞을 걷고 있는 박상원", width: 480, height: 600 },
  name: "박상원",
  handle: "Pktony.",
  title: "Product Engineer · Unity & Web",
  email: "pktony2011@gmail.com",
  intro: [
    "Unity 클라이언트에서 시작해 **백엔드·배포·운영까지 연결하는** 일루니 개발2팀 팀장입니다. 글로벌 3D 소셜 서비스 Moii에서 **캐릭터 실시간 동기화와 마이크로서비스 분리**를 맡았고, 코드리뷰·Git Flow를 팀에 정착시켜 최종 MR 검토를 하고 있습니다.",
    "**반복되는 요청을 줄이는 데** 집중해왔습니다. Unity 피드를 웹뷰로 바꿔 콘텐츠 반영을 **3일에서 5분**으로 줄였고, NCT WISH 프로모션에서는 기획자가 에셋 교체부터 배포까지 직접 하는 제작 도구를 만들어 **2주 만에 개발·배포**했습니다. AI도 같은 관점으로 씁니다. 시맨틱 캐시로 Text to Animation의 생성 지연을 **15초에서 3초**로 줄였고, 운영 보고는 Claude 루틴으로 자동화했습니다.",
    "항공기 형식인증 엔지니어로 일하며 배운 대로, 먼저 측정하고 고친 뒤에는 **검증 근거와 변경 이력을 남겨** 누구나 이어받을 수 있게 합니다.",
  ],
};
