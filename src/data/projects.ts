import type { Project } from "@/types/resume";

export const projects: Project[] = [
  {
    name: "NCT WISH · WISH TOWN 위젯",
    icon: "widget",
    period: "2026.09 ~ 2026.10",
    role: "위젯, 관리자, 제작 도구, 인프라, 로그 관측 개발",
    summary: "NCT WISH 프로모션 페이지에 삽입하는 팬 참여 게임 위젯과, 기획자가 직접 쓰는 제작·운영 도구",
    bullets: [
      "iframe 삽입형 JavaScript 위젯과 2D 스프라이트시트 캐릭터 모션 구현. 탐색·교류·미션·구매 기능과 모바일·다국어 화면",
      "웹 편집 도구와 MCP로 기획자가 에셋 교체·씬 설정·개발환경 배포를 직접 요청하고 확인",
      "사용자 위젯은 S3·CloudFront, 관리자 서버는 EC2로 분리. 로그를 Lambda에서 평탄화하고 정각마다 Athena로 집계해 행동 관측",
      "개발·배포까지 약 **2주**, 프로모션 페이지 오픈 첫 1시간 **83,000 PV**",
    ],
    tech: ["JavaScript", "iframe", "MCP", "S3", "CloudFront", "Lambda", "EC2", "Athena", "Tailwind CSS v4"],
    links: [{ label: "위시랜드", url: "https://www.wishwishwishwishwishland.com/" }],
    featured: true,
  },
  {
    name: "UMZIK · AI 스프라이트 애니메이션 생성 서비스",
    icon: "sprite",
    period: "2026.08 ~ 2026.10",
    role: "제품 설계, 프론트엔드, 백엔드, 인프라, 결제, 운영 도구 개발",
    summary: "사진 한 장으로 스프라이트 애니메이션을 만드는 AI 생성 서비스",
    bullets: [
      "모델별 결과·비용을 비교해 provider를 선별하고, provider별 큐·웹훅으로 긴 생성 작업을 웹 요청에서 분리",
      "토스페이먼츠 결제와 크레딧 차감, 상품·생성·결제 이력과 영수증을 확인하는 Admin, Slack 결제 알림",
      "Locust로 가상 사용자 **1,000명** 동시 생성 시나리오를 3회 실행해 **이중 과금 경로**와 DB 병목(커넥션 풀 9 → 25) 수정",
      "내부 생성 기록 934건 중 **911건 성공** (97.5%)",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Toss Payments", "Locust", "Tailwind CSS v4"],
    links: [{ label: "umzik.com", url: "https://umzik.com" }],
    featured: true,
  },
  {
    name: "Moiime · 3D 아바타 에셋 SaaS",
    icon: "cube",
    period: "2026.06 ~ 현재",
    role: "검색, 백엔드, SDK, 인프라 개발",
    summary: "3D 아바타 에셋을 서비스에 가져다 쓸 수 있게 제공하는 SaaS",
    bullets: [
      "**자연어 파츠 검색·조립:** 자연어 요청에서 파츠별 프롬프트를 추출하고 vector·image·lexical 검색으로 약 1,600개 파츠에서 골라 아바타로 조립",
      "**SDK:** SDK 제작과 문서 작성, API key 인증 구현. 데모 게임에 SDK를 연동해 사용성 검증",
      "프로토타입 인수 후 앱·인증·아바타 생성 서버를 재설계해 **3주 만에 출시**",
    ],
    tech: ["TypeScript", "NestJS", "React", "Tailwind CSS v4", "three.js", "PostgreSQL", "MongoDB", "Vector Search", "S3", "CDN"],
    links: [{ label: "moii.me", url: "https://moii.me" }],
    featured: true,
  },
  {
    name: "Modular Grid Inventory",
    icon: "grid",
    period: "2026.09",
    role: "설계, 구현, 제작 도구, 테스트",
    summary: "중첩 가방·독립 포켓·수납 제한·스택을 지원하는 Unity 인벤토리 패키지",
    bullets: [
      "이동 실패 시 상태 유지, 자기 자신·자손 가방으로의 순환 중첩 방지",
      "Custom Inspector에서 포켓 배치·수납 규칙을 편집하고 미리보기·Undo 지원",
      "테스트 **125건**(Edit 101 · Play 24), Asset Store 심사 제출",
    ],
    tech: ["Unity", "C#", "uGUI", "ScriptableObject", "Unity Test Framework"],
    links: [
      { label: "데모", url: "https://youtu.be/cyUhx101tj8" },
      { label: "GitHub", url: "https://github.com/pktony/modular-grid-inventory" },
    ],
    featured: false,
  },
];
