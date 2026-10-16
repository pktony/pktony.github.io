import type { Project } from "@/types/resume";
import { moiimeDetail } from "./details/moiime";
import { wishTownDetail } from "./details/wishTown";
import { umzikDetail } from "./details/umzik";
import { matzipmapDetail } from "./details/matzipmap";
import { modularGridInventoryDetail } from "./details/modularGridInventory";

export const projects: Project[] = [
  {
    name: "맛집여지도 · 방송 맛집 지도",
    details: matzipmapDetail,
    icon: "/project-icons/matzipmap.webp",
    period: "2026.07 ~ 현재",
    summary: "방송·유튜브 맛집 3,000곳 이상을 모은 지도 서비스. 광고비 0원으로 MAU 약 4.4만 명",
    bullets: [
      "GitHub Actions와 LLM으로 자동 수집하고 네이버 지역검색과 대조해 검수 대기로 등록하는 흐름을 구축. 검수 에이전트가 매일 승인·반려·보류를 판단",
      "DB 부하를 줄이려 지도 조회에 엣지 캐싱을 적용하고, 필터와 클러스터링을 서버 메모리에서 처리",
      "**모두의 창업** 2차 2라운드 진출",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "Supabase", "Vercel", "GitHub Actions", "LLM"],
    links: [{ label: "matzipmap.com", url: "https://www.matzipmap.com" }],
    kind: "personal",
  },
  {
    name: "사내 통합 모니터링 시스템",
    summary: "여러 서비스가 공유하는 지표·로그 관측 시스템을 구축하고 프로젝트별로 나눠 운영",
    bullets: [
      "지표(Prometheus·Grafana)와 로그(Fluent Bit·Elasticsearch·Kibana)를 하나의 시스템으로 구성",
      "메모리·CPU 임계치 알림 설계",
      "Claude 루틴으로 4xx·5xx 오류와 API 응답 시간 통계를 매일 확인하고 보고서와 Slack 알림 자동화",
    ],
    tech: ["Prometheus", "Grafana", "Fluent Bit", "Elasticsearch", "Kibana", "Claude"],
    links: [],
    kind: "work",
  },
  {
    name: "NCT WISH · WISH TOWN 위젯",
    details: wishTownDetail,
    icon: "/project-icons/wish-town.webp",
    period: "2026.09 ~ 2026.10",
    role: "위젯, 관리자, 제작 도구, 인프라, 로그 관측 개발",
    summary: "NCT WISH 프로모션 페이지에 삽입하는 팬 참여 게임 위젯과, 기획자가 직접 쓰는 제작·운영 도구",
    bullets: [
      "iframe 삽입형 JavaScript 위젯과 2D 스프라이트시트 캐릭터 모션 구현. 탐색·교류·미션·구매 기능과 모바일·다국어 화면",
      "웹 편집 도구와 MCP로 기획자가 에셋 교체·씬 설정·개발환경 배포를 직접 요청하고 확인",
      "사용자 위젯은 S3·CloudFront, 관리자 서버는 EC2로 분리. 로그를 Lambda에서 평탄화하고 정각마다 Athena로 집계해 행동 관측",
      "개발·배포까지 약 ==2주==, 프로모션 페이지 오픈 첫 1시간 접속자 ==83,000명==",
    ],
    tech: ["JavaScript", "iframe", "MCP", "S3", "CloudFront", "Lambda", "EC2", "Athena", "Tailwind CSS v4"],
    links: [{ label: "위시랜드", url: "https://www.wishwishwishwishwishland.com/" }],
    kind: "work",
  },
  {
    name: "UMZIK · AI 스프라이트 애니메이션 생성 서비스",
    details: umzikDetail,
    icon: "/project-icons/umzik.webp",
    period: "2026.08 ~ 2026.10",
    role: "제품 설계, 프론트엔드, 백엔드, 인프라, 결제, 운영 도구 개발",
    summary: "사진 한 장으로 스프라이트 애니메이션을 만드는 AI 생성 서비스",
    bullets: [
      "모델별 결과·비용을 비교해 provider를 선별하고, provider별 큐·웹훅으로 긴 생성 작업을 웹 요청에서 분리",
      "토스페이먼츠 결제와 크레딧 차감, 상품·생성·결제 이력과 영수증을 확인하는 Admin, Slack 결제 알림",
      "Locust로 가상 사용자 ==1,000명== 동시 생성 시나리오 3개를 실행해 커넥션 풀을 늘려 DB 병목 수정",
      "내부 생성 기록 934건 중 ==911건== 성공 (97.5%)",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Toss Payments", "Locust", "Tailwind CSS v4"],
    links: [{ label: "umzik.com", url: "https://umzik.com" }],
    kind: "work",
  },
  {
    name: "Moiime · 3D 아바타 에셋 SaaS",
    details: moiimeDetail,
    icon: "/project-icons/moiime.webp",
    period: "2026.06 ~ 현재",
    role: "검색, 백엔드, SDK, 에셋 파이프라인, 인프라 개발",
    summary: "3D 아바타 에셋을 서비스에 가져다 쓸 수 있게 제공하는 SaaS",
    bullets: [
      "**자연어 파츠 검색·조립:** 자연어 요청에서 파츠별 프롬프트를 추출하고 텍스트·이미지 임베딩과 렉시컬을 결합한 **하이브리드 검색**으로 파츠를 골라 아바타로 조립",
      "**에셋 버전 관리:** 버전을 해시로 식별하고 버전 포인터만 바꿔 **롤백**을 쉽게 하며, 변경된 것만 올리는 **증분 빌드**로 배포",
      "**SDK:** SDK 제작과 문서 작성, API key 인증 구현. 데모 게임에 SDK를 연동해 사용성 검증",
      "프로토타입 인수 후 앱·인증·아바타 생성 서버를 재설계해 ==3주== 만에 출시",
    ],
    tech: ["TypeScript", "NestJS", "React", "Tailwind CSS v4", "three.js", "PostgreSQL", "MongoDB", "Vector Search", "S3", "CDN"],
    links: [{ label: "moii.me", url: "https://moii.me" }],
    kind: "work",
  },
  {
    name: "Modular Grid Inventory",
    details: modularGridInventoryDetail,
    icon: "/project-icons/modular-grid-inventory.webp",
    period: "2026.09",
    role: "설계, 구현, 제작 도구, 테스트",
    summary: "Escape from Tarkov 스타일 격자 인벤토리 시스템. 중첩 가방·독립 포켓·수납 제한·스택을 지원하는 Unity 패키지",
    bullets: [
      "Custom Inspector에서 포켓 배치·수납 규칙을 편집하고 미리보기·Undo 지원",
      "**Unity Test Framework**로 자동 테스트 ==125건==(Edit Mode 101 · Play Mode 24) 통과, Asset Store 심사 제출",
    ],
    tech: ["Unity", "C#", "uGUI", "ScriptableObject", "Unity Test Framework"],
    links: [
      { label: "데모", url: "https://youtu.be/cyUhx101tj8" },
      { label: "GitHub", url: "https://github.com/pktony/modular-grid-inventory" },
    ],
    kind: "personal",
  },
];
