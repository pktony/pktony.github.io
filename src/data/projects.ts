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
    role: "개발 리드 (아키텍처 · AI · 인프라 · 외부 연동)",
    summary: "파츠 1,600여 개로 3D 캐릭터를 자연어·편집기로 조립해 Blender·Unity·VRChat·AI 앱(MCP)·웹 SDK로 가져다 쓰는 서비스",
    bullets: [
      "**자연어 캐릭터 제작 & 모델 평가·검색 최적화:** 골든셋 문장 ==121건==으로 5개 LLM을 비교·튜닝해 경량 모델(gpt-6-luna) 적중률을 ==85% → 95%==(gpt-4o 동급)로 높이고 호출당 비용 ==1/46== 절감. 파츠 검색은 질의 43건 측정으로 하이브리드 방식(정답률 ==95.3%==)을 채택하되 데이터가 1.5MB라 별도 검색 인프라 없이 서버 메모리에서 1ms 미만으로 처리",
      "**유저용 생태계 배포 (MCP · Blender 애드온 · VRChat SDK):** 유저가 외부 도구에서 바로 캐릭터를 쓰도록 OAuth 2.1(PKCE) 무상태 MCP 서버와 MCP Apps 3D 위젯, Blender 컨트롤 리그 애드온(v8), VRChat 원클릭 변환 VPM 패키지(1.1.0)를 구축·배포. CDN 확장 저장소 자동 업데이트와 격리 프로필 테스트로 배포 안정성 확보",
      "**해시 기반 에셋 관리 툴 & 프리뷰 보호 인프라:** 로컬 CDN 미러와 7자 내용 해시 불변 릴리즈·증분 업로드(asset-manager)로 하루 10회 이상 발행 중 덮어쓰기 사고 ==0건==. 프리뷰 에셋은 암호화 발행 후 인증 세션에만 복호 키를 발급(환경별 Postgres·공유 Atlas reader/writer 분리)하고 대량 다운로드 한도·알림을 적용",
      "**프론트엔드 에러 모니터링 정책 설계 (Sentry):** 서버(Grafana)와 역할을 나눠 웹 브라우저 에러만 수집하고, 5xx·401/403·네트워크 단절을 제외한 단일 필터와 React ErrorBoundary fatal 승격 규칙을 설계. PII 차단·사용자 ID SHA-256 해싱·소스맵 빌드 삭제·DSN rate limit(분당 100)·Slack 조건부 알림으로 노이즈와 쿼터를 통제해 UMZIK까지 표준화",
      "**외부 애니메이션 리타게팅 알고리즘 & 산출물 회귀 검증:** Three.js 기본 리타게팅의 라이브 아바타 오염·축 뒤틀림 문제를 rest-상대 월드 델타 쿼터니언 변환으로 직접 구현(Mixamo 22본 · SMPL-H 67본). 실사용 캐릭터 8종×2옵션(16건)을 Blender·Unity에서 3차 회귀 검증해 정점 오차 1µm 미만·본 회전 오차 ==0°==·==16/16== 통과 및 재다운로드 과금 ==0== 유지 입증",
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
    role: "개발 담당 (기획 참여, 디자인은 별도 담당자)",
    summary: "사진 한 장으로 8프레임 스프라이트 애니메이션을 만드는 유료 AI 생성 서비스",
    bullets: [
      "**결제 중복 지급 방지:** 락 서버나 큐 없이 DB 조건부 UPDATE와 유니크 인덱스만으로 크레딧을 1회만 지급. 동시 승인 테스트(10건×20회)에서 매번 1건만 통과, 운영 중 중복 지급 ==0건==. 다통화(KRW·USD·JPY) 결제까지 확장",
      "**AI 생성 시트 프레임 추출:** 고정 격자로 자르면 포즈가 잘리는 문제를 픽셀 클러스터링으로 해결(무게중심 흔들림 ==11.6% → 0.3%==). 라이브 추출 실패 25건을 새 코드로 다시 돌려 ==19건== 통과",
      "**생성 실패·비용 통제:** 유료 AI 호출은 비용 때문에 재시도하지 않고 후처리만 재시도하며, 최종 실패 건은 자동 환불. 라이브 최종 실패 ==2.1%==(624건 중 13건, 전부 환불)",
      "**1,000명 부하 테스트 & 실운영 로그인 복구:** 자체 로컬 JWKS·자동 판정 기준의 Locust 테스트로 세션 갱신 트랜잭션 DB 병목을 수정(수정 전 8분간 DB 오류 ==351건==, 수정 후 28분 테스트 서버 오류 ==0건==). 인앱 브라우저(TikTok·카카오) 전환 시 쿠키 분리로 발생하던 OAuth CSRF 실패(181건 중 179건 재로그인 확인)를, CSRF 방어를 유지한 채 no_state 안내 흐름으로 분리해 해결",
      "**원격 MCP · Agent Plugin · 모니터링 운영:** OAuth 2.1(CIMD·PKCE S256) 기반 원격 MCP 서버(mcp.umzik.com/mcp)와 Agent Plugins 1.0 패키지를 검증·운영하고, Moiime와 같은 웹 Sentry 수집 정책(권한 경로 code 마스킹 포함)을 표준화 적용",
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
    role: "개발·인프라 담당 (기획 참여)",
    summary: "NCT WISH 프로모션 페이지에 삽입하는 팬 참여 게임 위젯과 기획자용 제작 도구. 30일간 이용자 142,300명, 재방문 29.3%",
    bullets: [
      "**기획자용 제작 도구 & 안전 가드레일 MCP:** 에셋 교체·씬 설정·개발환경 배포를 개발자 없이 처리하도록 웹 편집 도구와 사내 MCP를 제공해 서비스 기간 MCP 호출 ==약 4,700건== 기록. 삭제·배포·킬스위치에는 2단계 confirm 미리보기와 통째 교체 PUT 보호·감사 로그를 적용해 AI 오조작을 차단",
      "**API 의존성 0건 정적 배포 & 30일 무중단 운영:** 컴백 당일 평시 대비 60~95배 트래픽 급증에 맞춰 '빨리 늘리기' 대신 '늘릴 것을 남기지 않는' 구조를 선택. 위젯 런타임에서 API 서버 의존성을 ==0건==으로 없애고 SHA-256 검증 정적 번들·킬스위치와 엣지 비콘(CloudFront Function 12개 이벤트 화이트리스트)·Athena 정각 집계로 구성해, 오픈 첫날 ==109,605명==·30일 ==142,300명== 동안 서비스 중단·롤백·핫픽스 ==0건==",
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
    summary: "방송·유튜브 맛집 3,554곳을 모은 지도 서비스. 광고비 0원으로 공개 두 달 만에 7만 명 방문(최고 MAU 약 6만 명, GA4 기준)",
    bullets: [
      "**환각 차단 수집·자동 검수 파이프라인:** GitHub Actions로 매일 수집(138회 실행 ==100%== 성공, 누적 ==9,667건== 영상 처리)하며 deepseek-v4.1-flash로 2단계(제목·설명 → 자막) 추출 후 원문 인용 불일치를 즉시 폐기. 검수 대기(PENDING) 장소는 매일 새벽 자동 검수 에이전트(50회 실행, 누적 80건 검수: 승인 54 · 보류 14)가 네이버 지도 좌표 일치·결정적 규칙과 영상 맥락을 대조해 승인·반려·보류를 판단",
      "**지도 조회 1시간 스냅샷 캐시:** 뷰포트마다 쿼리가 달라져 Supabase 무료 Egress(5GB)를 초과하던 문제를, 공개 장소 전체(약 3,500곳 · 676kB)를 Next.js 공유 Data Cache(unstable_cache, 1시간)에 두고 메모리 필터·격자 클러스터링으로 해결. 캐시 적중 시 Date 직렬화 함정을 단일 경계에서 복원하고, 마커 집합 변경 시에만 선택 무효화",
      "**오가닉 성장 & 창업 선정:** 광고비 0원으로 X 조회 ==32만 회==·매거진 댓글 ==5,600개+==를 기록하며 최고 MAU ==약 6만 명== 달성. **모두의 창업** 2차 2라운드 진출(프라이머 멘토기관)",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "Supabase", "Vercel", "GitHub Actions", "deepseek-v4.1-flash"],
    links: [{ label: "matzipmap.com", url: "https://www.matzipmap.com" }],
    kind: "personal",
  },
];
