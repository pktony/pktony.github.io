import type { Project } from "@/types/resume";
import { moiimeDetail } from "./details/moiime";
import { wishTownDetail } from "./details/wishTown";
import { umzikDetail } from "./details/umzik";
import { matzipmapDetail } from "./details/matzipmap";

export const projects: Project[] = [
  {
    name: "Moiime · 3D 캐릭터 에셋 SaaS",
    details: moiimeDetail,
    icon: "/project-icons/moiime.webp",
    period: "2026.06 ~ 현재",
    role: "개발 리드",
    summary: "파츠 1,600여 개로 3D 캐릭터를 조립해 외부 3D 툴·AI 앱·웹으로 내보내는 SaaS",
    highlights: [
      { label: "LLM 호출 비용", value: "1/46 절감" },
      { label: "발행 덮어쓰기", value: "0건" },
      { label: "프리뷰 추출 방어", value: "8,300개/2초" },
      { label: "리타게팅 회귀", value: "16 / 16" },
    ],
    bullets: [
      "**자연어 캐릭터 제작:** 121건 평가로 경량 LLM 적중률 ==85% → 95%==, 호출 비용 ==1/46== 절감 (하이브리드 검색 ==95.3%==)",
      "**외부 생태계 배포:** 로그인만으로 쓰는 원격 MCP·3D 위젯, Blender 리그 애드온, VRChat 원클릭 패키지 배포",
      "**에셋 발행 & 프리뷰 보호:** 내용 해시 증분 발행으로 덮어쓰기 ==0건==, 암호화·워터마크 보호 및 웹 Sentry 표준화",
      "**리타게팅 & 산출물 검증:** 외부 애니메이션 리타게팅 직접 구현, 실사용 ==16/16== 회귀 통과 (정점 오차 ==1µm 미만==)",
    ],
    tech: ["TypeScript", "NestJS", "Python", "PostgreSQL", "MongoDB", "MCP", "Blender", "Unity", "Sentry", "S3", "CloudFront"],
    links: [{ label: "moii.me", url: "https://moii.me" }],
    kind: "work",
  },
  {
    name: "UMZIK · AI 스프라이트 애니메이션 생성 서비스",
    details: umzikDetail,
    icon: "/project-icons/umzik.webp",
    period: "2026.08 ~ 현재",
    role: "개발 담당",
    summary: "사진 한 장으로 8프레임 스프라이트 애니메이션을 만드는 유료 AI 생성 서비스",
    highlights: [
      { label: "결제 중복 지급", value: "0건" },
      { label: "프레임 흔들림", value: "11.6 → 0.3%" },
      { label: "라이브 최종 실패", value: "2.1%" },
      { label: "1,000명 부하 오류", value: "0건" },
    ],
    bullets: [
      "**결제 중복 지급 방지:** 락·큐 없이 DB 조건부 업데이트만으로 중복 지급 ==0건== 달성, 다통화(KRW·USD·JPY) 결제 지원",
      "**AI 시트 추출 & 비용 통제:** 픽셀 클러스터링으로 프레임 흔들림 ==11.6% → 0.3%==, 최종 실패(==2.1%==) 전원 자동 환불",
      "**1,000명 부하 & 로그인 복구:** 세션 DB 병목 제거로 부하 테스트 서버 오류 ==0건==, 인앱 브라우저 로그인 실패 복구",
      "**외부 연동 & 모니터링:** OAuth 2.1 원격 MCP 서버·Agent Plugin을 배포하고 웹 Sentry 수집 정책 표준화",
    ],
    tech: ["Next.js", "NestJS", "Python", "PostgreSQL", "AWS", "Toss Payments", "Locust", "MCP", "Sentry"],
    links: [{ label: "umzik.com", url: "https://umzik.com" }],
    kind: "work",
  },
  {
    name: "NCT WISH · WISH TOWN 위젯",
    details: wishTownDetail,
    icon: "/project-icons/wish-town.webp",
    period: "2026.09 ~ 2026.11",
    role: "개발·인프라 담당",
    summary: "NCT WISH 프로모션 페이지에 삽입하는 팬 참여 게임 위젯과 기획자용 제작 도구",
    highlights: [
      { label: "30일 이용자", value: "142,300명" },
      { label: "재방문 비율", value: "29.3%" },
      { label: "중단 · 핫픽스", value: "0건" },
      { label: "사내 MCP 호출", value: "약 4,700회" },
    ],
    bullets: [
      "**기획자용 제작 도구 & MCP:** 개발자 없이 에셋·씬·배포를 처리(MCP ==약 4,700회==), 2단계 승인과 감사 로그로 오조작 차단",
      "**서버 의존성 0건 무중단 운영:** 컴백 당일 60~95배 트래픽을 정적 번들로 받아내 첫날 ==109,605명== 포함 30일 중단 ==0건==",
      "**엣지 로그 & 정각 집계:** CDN 엣지 비콘과 정각 자동 집계로 기획자가 어드민에서 재방문(==29.3%==)·로딩 실패를 직접 확인",
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
    role: "1인 기획 · 개발 · 운영",
    summary: "방송·유튜브 맛집을 매일 자동 수집·검수해 보여주는 1인 운영 지도 서비스 (두 달 만에 7만 명 방문)",
    highlights: [
      { label: "최고 MAU", value: "약 6만" },
      { label: "공개 맛집", value: "3,554곳" },
      { label: "자동 수집 성공", value: "138 / 138" },
      { label: "광고비", value: "0원" },
    ],
    bullets: [
      "**환각 차단 수집 & 자동 검수:** 매일 자동 수집(==138회== 연속 성공) 후 원문 인용 검증과 새벽 자동 검수 에이전트로 장소 검증",
      "**지도 조회 스냅샷 캐시:** 전체 장소 스냅샷을 1시간 공유 캐시에 올려 메모리 클러스터링으로 DB 전송량 한도 초과 해결",
      "**오가닉 성장 & 창업 선정:** X 조회 ==32만 회==·매거진 댓글 ==5,600개+== 유입, **모두의 창업** 2차 2라운드 진출(프라이머)",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "Supabase", "Vercel", "GitHub Actions", "deepseek-v4.1-flash"],
    links: [{ label: "matzipmap.com", url: "https://www.matzipmap.com" }],
    kind: "personal",
  },
];
