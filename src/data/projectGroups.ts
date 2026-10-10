import type { Project, ProjectGroup } from "@/types/resume";

type SubProject = Omit<Project, "kind" | "links"> & { links?: Project["links"] };

// 그룹 안의 하위 프로젝트: kind·links 기본값을 채운다
const sub = (p: SubProject): Project => ({ links: [], kind: "work", ...p });

export const projectGroups: ProjectGroup[] = [
  {
    title: "Moii · 3D 소셜 서비스",
    icon: "/project-icons/moii.webp",
    period: "2023.02 ~ 현재",
    role: "Unity 클라이언트, 백엔드 도메인 일부, 로그·알림 설계, 최종 MR 검토",
    serviceStats: {
      title: "Moii 서비스 지표",
      items: [
        { value: "약 59만", label: "누적 다운로드" },
        { value: "99.7%", label: "앱 안정성" },
      ],
    },
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
        name: "클라이언트 성능 최적화",
        period: "2025.09 ~ 2026.02",
        summary: "메모리·GC·렌더링 병목을 프로파일링으로 찾아 구조 단위로 해결",
        bullets: [
          "**셰이더:** Asset Bundle 간 중복 셰이더를 Shared Shader Bundle로 통합하고 Stripping과 ShaderVariantCollection 워밍업 적용. Shader 메모리 ==0.83GB → 약 1MB==, 에셋번들 로드 시 셰이더로 인한 크래시 ==제로==",
          "**데이터:** 역직렬화 GC 스파이크를 데이터 포맷 문제로 판단해 아바타 스키마를 JSON에서 Protobuf로 전환(gzip·FlatBuffers 검토 후 선택). GC 스파이크 제거, 에셋 용량 ==70%== 절감",
          "**UI:** SubCanvas 분리, 비동기 재활용 스크롤, 2단 캐시 이미지 로더로 렌더링 피크 최대 ==50%== 감소, 텍스처 메모리 약 ==90%== 절감 (16MB → 약 1.5MB)",
        ],
        tech: ["Unity", "Addressables", "Asset Bundle", "URP", "Protobuf", "Profiler"],
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
        name: "마이크로서비스 전환",
        summary: "단일 서버를 19개 서비스로 분리",
        bullets: ["개발자 4명이 단일 서버를 ==19개== 서비스로 분리. 일부 도메인 개발과 최종 MR 검토"],
        tech: ["NestJS", "Microservices"],
      }),
      sub({
        name: "배포·운영 병목 제거",
        period: "2024.12 ~ 2026.01",
        summary: "앱 빌드와 스토어 심사에 묶여 있던 반영 과정을 줄이고 비개발자가 직접 운영하게 함",
        bullets: [
          "피드를 Next.js 웹뷰로 전환하고 Unity와 Web 양방향 브릿지 프로토콜을 설계해 콘텐츠 반영 ==3일 → 5분==",
          "DB → CMS → S3·CloudFront → 클라이언트 구조로 룰렛·배너·공지·미션을 스키마화해 시즌 콘텐츠를 빌드·심사 없이 즉시 반영",
          "iOS·Android 빌드를 ==8개== 파이프라인으로 자동화해 약 25분간 PC를 점유하던 로컬 빌드 제거. Slack, Firebase App Distribution, TestFlight 연동",
        ],
        tech: ["Next.js", "Tailwind CSS v4", "Vercel", "CMS", "S3", "CloudFront", "Jenkins"],
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
        name: "Text to Animation 시맨틱 캐시",
        period: "2026.02 ~ 2026.04",
        summary: "query embedding과 semantic cache로 매 요청의 모델 실행을 줄인 텍스트 → 애니메이션 서비스",
        bullets: [
          "정규화한 입력으로 캐시를 조회하고 miss일 때만 추론해 생성 지연 ==15초 → 3초==",
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
          "7개 봇을 하루 9시간, 20~60분 간격으로 운영해 첫 3개월 월 ==5,600~17,000건==의 액션 처리",
          "성공·실패·거절 로그와 기획자용 관리 화면 구현",
        ],
        tech: ["NestJS", "LangGraph", "Fine-tuning"],
      }),
    ],
  },
];
