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
    summary: "방송·유튜브 맛집 3,000곳 이상을 모은 지도 서비스. 광고비 0원으로 최고 MAU 약 6만 명(2026년 8월, GA4 기준)",
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
    name: "UMZIK · AI 스프라이트 애니메이션 생성 서비스",
    details: umzikDetail,
    icon: "/project-icons/umzik.webp",
    period: "2026.08 ~ 2026.10",
    role: "제품 설계, 프론트엔드, 백엔드, 인프라, 결제, 운영 도구 개발",
    summary: "사진 한 장으로 스프라이트 애니메이션을 만드는 AI 생성 서비스",
    bullets: [
      "**부하 재현:** Locust로 가상 사용자 ==1,000명==의 로그인과 생성 부하를 재현해 세션 갱신이 한 트랜잭션에 묶여 연결을 오래 잡는 문제를 찾음. 트랜잭션 해제·토큰 정리 분리·커넥션 풀 조정 후 DB 오류 ==351건(8분) → 0건(약 28분)==",
      "**결제 중복 지급 방지:** 주문번호와 금액은 서버 값만 사용. 조건부 UPDATE로 동시 승인 중 하나만 통과시키고, 원장 유니크 인덱스로 같은 주문의 크레딧 지급을 1회로 제한. 승인 응답이 끊기면 결제 조회로 확인하고 실패로 닫지 않음",
      "**실패 처리와 복구:** AI 생성은 비용을 고려해 자동 재시도하지 않고 실패 기록과 Slack 알림으로 대응. 후처리 워커는 재시도와 재시작 후 복구를 지원하며, 복구된 결과를 사용자에게 비동기로 전달",
      "**스프라이트 프레임 추출:** AI가 그린 시트를 고정 격자로 자르면 옆 포즈의 꼬리가 섞이고 몸이 잘림(테스트 시트 4칸 중 3칸). 이어진 픽셀 덩어리를 통째로 가장 많이 겹치는 칸에 배정하고, 포즈가 붙은 판만 경계를 2px 잘라 다시 배정. 라이브 추출 실패 ==25건 중 19건== 복구, 최종 실패 ==2.1%==(624건 중 13건, 전부 환불)",
      "**큐 기반 생성 파이프라인:** provider별 생성 큐와 별도 후처리 워커 큐를 구성. 동시 실행 수와 provider 요청 제한에 대응하고 웹훅으로 받은 결과를 후처리로 연결",
      "상품·생성·결제 이력과 영수증을 확인하는 Admin, Slack 결제 알림",
      "별도 생성 기록 기준 단순 생성 성공률 ==99.5%==, 애니메이션화까지 전체 단계 성공률 ==97.5%== (부하 테스트 결과와 구분)",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Toss Payments", "Locust", "Tailwind CSS v4"],
    links: [{ label: "umzik.com", url: "https://umzik.com" }],
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
      "오픈 첫 1시간 접속자 ==83,000명==, 30일간 이용자 ==142,300명==. 접속이 가장 몰린 시간에도 로딩 실패율 2.4%, 서비스 중단 0건",
    ],
    tech: ["JavaScript", "iframe", "MCP", "S3", "CloudFront", "Lambda", "EC2", "Athena", "Tailwind CSS v4"],
    links: [{ label: "위시랜드", url: "https://www.wishwishwishwishwishland.com/" }],
    kind: "work",
  },
  {
    name: "Moiime · 문장으로 만드는 3D 캐릭터 서비스",
    details: moiimeDetail,
    icon: "/project-icons/moiime.webp",
    period: "2026.06 ~ 현재",
    role: "개발 리드 (아바타 시스템은 보조)",
    summary: "문장으로 3D 캐릭터를 만들고, 파일로 내려받거나 SDK로 다른 서비스에 넣어 쓰는 서비스",
    bullets: [
      "**자연어 캐릭터 생성 오류 차단:** AI가 남성 캐릭터에 스커트를 입히거나 없는 컨셉(\"마녀\")에 엉뚱한 옷을 고르는 문제가 프롬프트 규칙으로는 막히지 않아, 코드에서 직접 걸러냄. 테스트 문장 72개 기준 요청에 맞는 옷 비율 ==50% → 91%==, 성별에 맞지 않는 옷 ==10% → 0건==",
      "**파츠 검색 방식을 측정으로 결정:** 키워드 검색, 의미 기반 검색, 둘을 합친 방식을 테스트 질의 43개로 비교해 첫 결과 정답률이 가장 높은 합친 방식 채택(==95.3%==). 정답률을 낮춘 이미지 검색은 빼고, 파츠가 1,464개뿐이라 검색 인프라를 따로 두지 않고 서버 메모리에서 처리(1ms 미만)",
      "**운영 API 메모리 장애 대응:** Grafana·Prometheus 알림으로 API가 메모리 초과로 멈춘 것을 확인. 원인인 무제한 캐시에 상한(LRU)을 두고 Docker 메모리 상한을 설정. 같은 점검에서 발행 전 빈 응답이 1년간 캐시로 굳는 문제도 찾아 막음",
      "**해시 기반 에셋 시스템:** 사람이 붙인 버전 이름이 동시 업로드 때 서로 덮어쓰던 문제를, 파일 내용 해시로 버전을 정하게 바꿔 잠금 장치 없이 해결. 하루 최대 10회 넘게 발행하는 동안 ==덮어쓰기 사고 0건==",
    ],
    tech: ["TypeScript", "NestJS", "PostgreSQL", "MongoDB", "Voyage", "S3", "CloudFront"],
    links: [{ label: "moii.me", url: "https://moii.me" }],
    kind: "work",
  },
  {
    name: "사내 통합 모니터링 시스템",
    summary: "여러 서비스가 공유하는 지표·로그 관측 시스템을 구축하고 프로젝트별로 나눠 운영",
    bullets: [
      "지표(Prometheus·Grafana)와 로그(Fluent Bit·Elasticsearch·Kibana)를 하나의 시스템으로 구성",
      "메모리·CPU 임계치 알림 설계. 이 알림으로 Moiime 운영 API가 메모리 초과로 멈춘 것을 감지하고 원인(무제한 캐시)을 수정",
      "Claude 루틴으로 4xx·5xx 오류와 API 응답 시간 통계를 매일 확인하고 보고서와 Slack 알림 자동화",
    ],
    tech: ["Prometheus", "Grafana", "Fluent Bit", "Elasticsearch", "Kibana", "Claude"],
    links: [],
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
