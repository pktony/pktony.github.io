import type { Project } from "@/types/resume";
import { moiimeDetail } from "./details/moiime";
import { wishTownDetail } from "./details/wishTown";
import { umzikDetail } from "./details/umzik";
import { matzipmapDetail } from "./details/matzipmap";
import { modularGridInventoryDetail } from "./details/modularGridInventory";

export const projects: Project[] = [
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
    name: "UMZIK · AI 스프라이트 애니메이션 생성 서비스",
    details: umzikDetail,
    icon: "/project-icons/umzik.webp",
    period: "2026.08 ~ 현재",
    role: "개발 담당 (기획 참여, 디자인은 별도 담당자)",
    summary: "사진 한 장으로 스프라이트 애니메이션을 만드는 AI 생성 서비스",
    bullets: [
      "**결제 중복 지급 방지:** 승인 요청이 동시에 오거나 응답이 끊겨 재시도돼도 크레딧이 한 번만 지급되도록, 별도 락 서버나 큐 없이 DB 조건부 UPDATE와 원장 유니크 인덱스로 제한. 같은 주문 ==10건 동시 승인을 20회 반복==해 매번 1건만 통과, 운영 중 중복 지급 ==0건==",
      "**AI 생성 시트 프레임 추출:** AI가 그린 시트를 고정 격자로 자르면 옆 포즈의 꼬리가 섞이고 몸이 잘림(테스트 시트 4칸 중 3칸). 이어진 픽셀 덩어리를 통째로 가장 많이 겹치는 칸에 배정하고, 포즈가 붙은 판만 경계를 2px 잘라 다시 배정. 라이브 추출 실패 ==25건 중 19건== 복구",
      "**생성 실패 처리:** 유료 AI 호출은 비용 때문에 자동 재시도하지 않고, 이미 받은 원본을 다시 자르는 후처리(CPU 2초)만 재시도. 그래도 실패하면 환불. 라이브 최종 실패 ==2.1%==(624건 중 13건, 전부 환불)",
      "**1,000명 부하 테스트로 DB 병목 수정:** Locust로 가상 사용자 ==1,000명==의 로그인과 생성 부하를 재현해 세션 갱신이 한 트랜잭션에 묶여 연결을 오래 잡는 문제를 찾음. 트랜잭션 해제·토큰 정리 분리·커넥션 풀 조정 후 DB 오류 ==351건(8분) → 0건(약 28분)==",
    ],
    tech: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Toss Payments", "Locust"],
    links: [{ label: "umzik.com", url: "https://umzik.com" }],
    kind: "work",
  },
  {
    name: "NCT WISH · WISH TOWN 위젯",
    details: wishTownDetail,
    icon: "/project-icons/wish-town.webp",
    period: "2026.09 ~ 2026.11",
    role: "개발·인프라 담당 (기획 참여)",
    summary: "NCT WISH 프로모션 페이지에 삽입하는 팬 참여 게임 위젯과, 기획자가 직접 쓰는 제작·운영 도구",
    bullets: [
      "**기획자용 제작 도구:** 기획자가 개발자를 거치지 않고 에셋 교체·씬 설정·개발환경 배포를 하도록 웹 편집 도구와 MCP를 제공. 서비스 기간 기획자의 MCP 호출 ==약 4,700건==",
      "**서버 없는 위젯 배포:** 위젯은 서버가 필요 없어 정적 파일로 S3·CloudFront에 배포하고, 문제가 생기면 즉시 내리는 킬스위치를 준비. 접속이 가장 몰린 첫 시간에도 로딩 실패율 2.4%, 30일간 서비스 중단 ==0건==(이용자 ==142,300명==)",
    ],
    tech: ["JavaScript", "MCP", "S3", "CloudFront", "Lambda", "EC2", "Athena"],
    links: [{ label: "위시랜드", url: "https://www.wishwishwishwishwishland.com/" }],
    kind: "work",
  },
  {
    name: "맛집여지도 · 방송 맛집 지도",
    details: matzipmapDetail,
    icon: "/project-icons/matzipmap.webp",
    period: "2026.07 ~ 현재",
    summary: "방송·유튜브 맛집 3,000곳 이상을 모은 지도 서비스. 광고비 0원으로 최고 MAU 약 6만 명(2026년 8월, GA4 기준)",
    bullets: [
      "GitHub Actions와 LLM으로 자동 수집하고 네이버 지역검색과 대조해 검수 대기로 등록하는 흐름을 구축. 검수 에이전트가 매일 승인·반려·보류를 판단",
      "지도는 화면 위치가 조금만 달라도 다른 쿼리가 되어 캐시를 빗나가므로, 공개 장소 전체를 1시간 스냅샷으로 캐시하고 필터와 클러스터링을 서버 메모리에서 처리해 DB 요청을 줄임",
      "**모두의 창업** 2차 2라운드 진출",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "Supabase", "Vercel", "GitHub Actions", "LLM"],
    links: [{ label: "matzipmap.com", url: "https://www.matzipmap.com" }],
    kind: "personal",
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
