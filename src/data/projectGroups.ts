import type { Project, ProjectGroup } from "@/types/resume";

type SubProject = Omit<Project, "featured" | "links"> & { links?: Project["links"] };

// 그룹 안의 하위 프로젝트: featured·links 기본값을 채운다
const sub = (p: SubProject): Project => ({ links: [], featured: false, ...p });

export const projectGroups: ProjectGroup[] = [
  {
    title: "Moii · 3D 소셜 서비스",
    period: "2023.02 ~ 현재",
    role: "Unity 클라이언트, 백엔드 도메인 일부, 로그·알림 설계, 최종 MR 검토",
    summary: "글로벌 3D 소셜 서비스를 파티 게임으로 확장하며 클라이언트 성능·실시간 동기화·서비스 운영을 개선",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.illuni.moii" },
      { label: "App Store", url: "https://apps.apple.com/kr/app/id6456406927" },
    ],
    projects: [
      sub({
        name: "3D 오픈월드 실시간 동기화",
        period: "2024.12 ~ 2025.05",
        summary: "글로벌 유저 대상 실시간 위치 동기화 3D 오픈월드 개발",
        bullets: [
          "고지연·저대역폭(200kb/s 수준)에서도 끊김 없는 이동을 위해 Snapshot Interpolation과 제한된 Extrapolation 구현",
          "서버 틱 기반 FSM으로 상태 동기화 구조를 설계하고, WebSocket 재연결과 재연결 후 상태·위치 동기화 구현",
          "Light Probe 라이팅 베이크로 모바일 조명 연산을 줄이고, Target Matching으로 키가 다른 아바타의 의자 앉기 구현",
          "캐릭터 16명 접속 시에도 성능 저하와 OOM 없음",
        ],
        tech: ["Unity", "NavMesh", "WebSocket", "Snapshot Interpolation", "FSM"],
      }),
      sub({
        name: "셰이더 메모리 최적화",
        period: "2025.12 ~ 2026.01",
        summary: "파츠 번들의 리소스 로딩 구조 설계와 셰이더 메모리 최적화",
        bullets: [
          "Asset Bundle 간 중복 셰이더를 Shared Shader Bundle로 통합하고 Shader Stripping으로 미사용 variant 제거",
          "ShaderVariantCollection 기반 워밍업으로 런타임 셰이더 컴파일 제거",
          "Shader 메모리 **0.83GB → 약 1MB**, 에셋번들 로드 시 셰이더로 인한 크래시 **제로**",
          "앱 재배포 없이 카탈로그 갱신만으로 파츠 배포",
        ],
        tech: ["Unity", "Addressables", "Asset Bundle", "URP"],
      }),
      sub({
        name: "Protobuf 마이그레이션",
        period: "2026.01 ~ 2026.02",
        summary: "아바타 데이터 스키마를 JSON에서 Protobuf로 전환",
        bullets: [
          "역직렬화 GC 스파이크가 프레임 드랍과 발열로 이어지는 문제를 데이터 포맷의 문제로 판단",
          "gzip과 FlatBuffers를 검토한 뒤 스키마 공유와 코드 자동 생성이 가능한 Protobuf를 선택하고, 3D 좌표·파츠 구조에 맞는 스키마 직접 설계",
          "에셋 용량 **70%** 절감, GC 스파이크 제거, 로딩 시간 단축과 발열 감소",
        ],
        tech: ["Unity", "Protobuf", "protoc"],
      }),
      sub({
        name: "UI 렌더링 최적화",
        period: "2025.09",
        summary: "대량의 UI에서도 플레이가 끊기지 않도록 UGUI 스크롤 최적화",
        bullets: [
          "프로파일링으로 SetActive와 Canvas Rebuild 병목을 찾아 SubCanvas로 분리하고 비동기 재활용 스크롤 도입",
          "stbimage 기반 비동기 이미지 로드 모듈과 로컬·메모리 2단 캐시 제작",
          "렌더링 피크 시간 최대 **50%** 감소, 이미지 텍스처 메모리 약 **90%** 절감 (16MB → 약 1.5MB)",
        ],
        tech: ["Unity", "UGUI", "Profiler"],
      }),
      sub({
        name: "아바타 커스터마이징 시스템",
        period: "2024.03 ~ 2024.05",
        summary: "파츠 기반 아바타 커스터마이징 시스템 설계와 운영 도구",
        bullets: [
          "20개 이상의 카테고리 분류 체계와 파츠 조합 규칙(배타·세트)을 데이터 기반으로 설계하고 기획팀과 규칙 확정",
          "색상·위치·회전·크기 커스터마이즈와 실시간 프리뷰",
          "개발 서버와 독립된 아트팀 전용 파츠 뷰어를 만들어 기획·아트가 개발자 없이 콘텐츠 검증",
        ],
        tech: ["Unity", "Shader", "Material"],
      }),
      sub({
        name: "마이크로서비스 전환과 관측",
        summary: "단일 서버를 19개 서비스로 분리하고 관측·알림 체계 구성",
        bullets: [
          "개발자 4명이 단일 서버를 **19개 서비스**로 분리. 일부 도메인 개발과 최종 MR 검토",
          "Prometheus·Fluent Bit 기반 지표·로그 수집과 메모리·CPU 임계치 알림 설계",
          "Claude 루틴으로 4xx·5xx 오류와 API 응답 시간 통계를 매일 확인하고 보고서와 Slack 알림 자동화",
        ],
        tech: ["Prometheus", "Grafana", "Fluent Bit", "Claude"],
      }),
      sub({
        name: "피드 웹뷰 전환",
        period: "2025.12 ~ 2026.01",
        summary: "Unity 앱 내 피드를 Next.js 웹뷰로 전환",
        bullets: [
          "피드 UI 변경마다 필요하던 앱 빌드와 스토어 심사(1~3일)를 없애 콘텐츠 반영 **3일 → 5분**",
          "Unity와 Web 양방향 브릿지 프로토콜 설계 (WebSocket 이벤트 중계, 네이티브 API 호출 통합)",
        ],
        tech: ["Unity", "Next.js", "Tailwind CSS v4", "Vercel"],
      }),
      sub({
        name: "빌드·배포 파이프라인",
        period: "2024.12 ~ 2025.02",
        summary: "iOS·Android 빌드를 Jenkins로 자동화",
        bullets: [
          "4개 프로젝트의 iOS·Android 빌드를 **8개 파이프라인**으로 구성해 약 25분간 PC를 점유하던 로컬 빌드 제거",
          "Shared Library로 공통 로직을 모듈화하고 Slack 알림, Firebase App Distribution, TestFlight 연동",
        ],
        tech: ["Jenkins", "Groovy", "Slack"],
      }),
      sub({
        name: "네이티브 플러그인",
        period: "2024.10",
        summary: "iOS·Android 네이티브 플러그인을 직접 개발해 외부 SDK 의존 제거",
        bullets: [
          "Share Sheet, 키보드, 오디오 세션을 Objective-C와 Java로 구현해 Unity 브릿지 레이어로 제어",
          "오픈소스 키보드 플러그인 확장과 유지보수",
        ],
        tech: ["Unity", "Objective-C", "Java"],
      }),
      sub({
        name: "콘텐츠 CMS",
        period: "2025.12 ~ 2026.01",
        summary: "비개발자가 콘텐츠를 직접 운영하는 웹·노션 기반 관리 시스템",
        bullets: [
          "DB → CMS → S3·CloudFront → 클라이언트 구조로 룰렛·배너·공지·미션을 스키마화",
          "시즌 콘텐츠마다 필요하던 빌드와 심사 병목을 없애고 변경을 즉시 반영",
        ],
        tech: ["CMS", "S3", "CloudFront"],
      }),
      sub({
        name: "Text to Animation 시맨틱 캐시",
        period: "2026.02 ~ 2026.04",
        summary: "query embedding과 semantic cache로 매 요청의 모델 실행을 줄인 텍스트 → 애니메이션 서비스",
        bullets: [
          "정규화한 입력으로 캐시를 조회하고 miss일 때만 추론해 생성 지연 **15초 → 3초**",
          "프롬프트 표준화, cache builder와 threshold 조정 도구 구현",
          "SMPL-H 52 joints를 Unity Humanoid 22 joints로 리타게팅하고 MediaPipe 영상에서 애니메이션 추출",
        ],
        tech: ["Python", "pgvector", "MediaPipe", "Unity Humanoid"],
      }),
      sub({
        name: "AI 피드 운영 자동화",
        period: "2025.12 ~ 2026.01",
        summary: "콘텐츠 생성과 실행을 분리한 LangGraph 워크플로로 피드 봇 7개를 운영",
        bullets: [
          "서비스 톤에 맞춘 데이터와 fine-tuning으로 콘텐츠 생성, 커뮤니티 가이드라인 검색과 생성물 검수",
          "7개 봇을 하루 9시간, 20~60분 간격으로 운영해 첫 3개월 월 **5,600~17,000건**의 액션 처리",
          "성공·실패·거절 로그와 기획자용 관리 화면 구현",
        ],
        tech: ["NestJS", "LangGraph", "Fine-tuning"],
      }),
    ],
  },
  {
    title: "Moiime · 3D 아바타 에셋 SaaS",
    period: "2026.06 ~ 현재",
    role: "검색, 백엔드, SDK, 인프라 개발",
    summary: "3D 아바타 에셋을 서비스에 가져다 쓸 수 있게 제공하는 SaaS",
    links: [{ label: "moii.me", url: "https://moii.me" }],
    projects: [
      sub({
        name: "자연어 아바타 파츠 검색·조립",
        summary: "자연어 조건으로 약 1,600개 파츠를 검색하고 아바타로 조립하는 기능",
        bullets: [
          "자연어 요청에서 파츠별 프롬프트를 추출하고 vector·image·lexical 검색 후 카테고리별로 선택해 아바타 조립",
        ],
        tech: ["TypeScript", "NestJS", "PostgreSQL", "MongoDB", "Vector Search", "S3", "CDN"],
      }),
      sub({
        name: "SDK 제작과 API key 인증",
        summary: "아바타 에셋을 외부 서비스에서 쓰도록 하는 SDK와 인증 체계",
        bullets: [
          "Web(three.js) 환경에서 쓰는 SDK 제작과 **SDK 문서** 작성",
          "**API key 인증** 구현",
          "데모 게임에 SDK를 직접 연동해 사용성을 검증하고, SDK와 삽입형 위젯을 분리",
        ],
        tech: ["TypeScript", "three.js", "React", "Tailwind CSS v4"],
      }),
      sub({
        name: "프로토타입 인수와 서버 재설계",
        summary: "인수한 프로토타입의 서버 구조를 다시 설계해 서비스 출시",
        bullets: [
          "앱·인증·아바타 생성 서버의 역할을 재설계해 인수 후 **3주 만에 출시**",
        ],
        tech: ["NestJS", "PostgreSQL", "MongoDB", "S3", "CDN"],
      }),
    ],
  },
];
