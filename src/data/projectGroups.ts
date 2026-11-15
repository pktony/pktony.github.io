import type { Project, ProjectGroup } from "@/types/resume";
import { multiplayerWorldDetail } from "./details/multiplayerWorld";
import { clientPerformanceDetail } from "./details/clientPerformance";
import { textToAnimationDetail } from "./details/textToAnimation";
import { aiFeedDetail } from "./details/aiFeed";

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
        { value: "99.7%", label: "앱 안정성 (스토어 콘솔 기준)" },
      ],
    },
    summary: "글로벌 3D 소셜 서비스를 파티 게임으로 확장하며 클라이언트 성능·실시간 동기화·서비스 운영을 개선",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.illuni.moii" },
      { label: "App Store", url: "https://apps.apple.com/kr/app/id6456406927" },
    ],
    projects: [
      sub({
        name: "배포·운영 병목 제거",
        period: "2024.12 ~ 2026.01",
        summary: "앱 빌드와 스토어 심사에 묶여 있던 반영 과정을 줄이고 비개발자가 직접 운영하게 함",
        bullets: [
          "피드를 Next.js 웹뷰로 전환해 콘텐츠 반영 ==최대 3일 → 5분==. Unity가 WebSocket 연결을 맡아 결과를 웹뷰에 전달하고, TypeScript·C# 메시지 타입을 대응시킨 통일 프로토콜로 중복 처리를 방지",
          "DB → CMS → S3·CloudFront → 클라이언트 구조로 룰렛·배너·공지·미션을 스키마화해 시즌 콘텐츠를 빌드·심사 없이 즉시 반영",
          "4개 프로젝트의 iOS·Android 빌드를 ==8개== 파이프라인으로 자동화해 약 25분간 PC를 점유하던 로컬 빌드 제거. 연간 ==2,000회 이상== 빌드를 운영. Slack, Firebase App Distribution, TestFlight 연동",
          "여러 서비스가 공유하는 모니터링(Prometheus·Grafana, Elasticsearch·Kibana)과 메모리·CPU 알림을 구축해 Moiime 운영 API 메모리 장애를 감지. Claude 루틴으로 오류와 응답 시간 통계를 매일 보고",
        ],
        tech: ["Next.js", "Vercel", "S3", "CloudFront", "Jenkins", "Prometheus", "Grafana"],
      }),
      sub({
        name: "AI 피드 운영 자동화",
        details: aiFeedDetail,
        period: "2025.12 ~ 2026.01",
        summary: "콘텐츠 생성과 실행을 분리한 LangGraph 워크플로로 피드 봇 7개를 운영",
        bullets: [
          "**생성과 실행 분리:** 가이드라인 준수, 맥락, 봇별 말투를 한 프롬프트로 지키기 어려워 행동 결정·생성·검수 단계로 나누고, 검수를 통과한 것만 서비스 API로 실행",
          "**말투 fine-tuning:** 일반 프롬프트는 전형적인 AI 말투가 나와 실제 SNS 문체로 fine-tuning. 봇 7개를 하루 9시간, 20~60분 간격으로 운영",
        ],
        tech: ["NestJS", "LangGraph", "Fine-tuning"],
      }),
      sub({
        name: "클라이언트 성능 최적화",
        details: clientPerformanceDetail,
        period: "2025.09 ~ 2026.02",
        summary: "메모리·GC·렌더링 병목을 프로파일링으로 찾아 구조 단위로 해결",
        bullets: [
          "**셰이더:** Asset Bundle 간 중복 셰이더를 Shared Shader Bundle로 통합하고 Stripping과 ShaderVariantCollection 워밍업 적용. 아바타 2명 로드 기준 Shader 메모리 ==0.83GB → 약 1MB==, 에셋번들 로드 시 셰이더 크래시 ==제거==",
          "**데이터:** 역직렬화 GC 스파이크를 데이터 포맷 문제로 판단해 아바타 스키마를 JSON에서 Protobuf로 전환(gzip·FlatBuffers 검토 후 선택). GC 스파이크 제거, 에셋 용량 ==70%== 절감",
          "**UI:** SubCanvas 분리, 비동기 재활용 스크롤, 2단 캐시 이미지 로더로 Canvas 갱신 시간 ==58%== 감소(Deep Profiling 기준), 텍스처 메모리 약 ==90%== 절감 (16MB → 약 1.5MB)",
        ],
        tech: ["Unity", "Addressables", "Asset Bundle", "URP", "Protobuf", "Profiler"],
      }),
      sub({
        name: "3D 실시간 멀티플레이 월드 개발",
        details: multiplayerWorldDetail,
        period: "2024.12 ~ 2025.05",
        summary: "글로벌 유저 대상 실시간 위치 동기화 3D 멀티플레이 월드 개발",
        bullets: [
          "**끊김 없는 이동:** TCP 재전송으로 위치 정보가 늦게 몰려오면 단순 보간으로는 멈춤이 생김. 예측과 보정을 갖춘 Dead Reckoning은 파티 게임에 필요한 정확도에 비해 복잡해 제외하고, 한 틱 늦게 그리는 보간과 ==100ms==까지만 쓰는 단순 외삽으로 해결. 대역폭을 200kb/s로 낮춘 환경에서 확인",
          "**16명 동시 접속 검증:** 라이브 정원 ==16명==(Android·iOS 실기기)에서 Unity Profiler 기준 프레임 저하, 메모리 초과, 스파이크 없음. 네트워크가 끊기면 자동 재연결 뒤 상태와 위치를 다시 맞춤(서버 틱 기반 FSM 동기화)",
        ],
        tech: ["Unity", "WebSocket", "Snapshot Interpolation", "FSM"],
      }),
      sub({
        name: "Text to Animation 시맨틱 캐시",
        details: textToAnimationDetail,
        period: "2026.02 ~ 2026.04",
        summary: "비슷한 요청은 캐시된 결과를 돌려줘 매 요청의 모델 실행을 줄인 텍스트 → 애니메이션 서비스",
        bullets: [
          "매 요청마다 GPU 추론을 돌리지 않도록, 비슷한 요청은 캐시된 애니메이션을 반환하고 없을 때만 추론. 유사도 기준값을 조정하는 도구를 직접 구현",
          "SMPL-H 52 joints를 Unity Humanoid 22 joints로 리타게팅하고 MediaPipe 영상에서 애니메이션 추출",
        ],
        tech: ["Python", "pgvector", "MediaPipe", "Unity Humanoid"],
      }),
    ],
  },
];
