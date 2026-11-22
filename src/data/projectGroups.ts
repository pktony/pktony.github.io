import type { Project, ProjectGroup } from "@/types/resume";
import { multiplayerWorldDetail } from "./details/multiplayerWorld";
import { clientPerformanceDetail } from "./details/clientPerformance";
import { moiiAiDetail } from "./details/moiiAi";

type SubProject = Omit<Project, "kind" | "links"> & { links?: Project["links"] };

// 그룹 안의 하위 프로젝트: kind·links 기본값을 채운다
const sub = (p: SubProject): Project => ({ links: [], kind: "work", ...p });

export const projectGroups: ProjectGroup[] = [
  {
    title: "Moii · 3D 소셜 서비스",
    icon: "/project-icons/moii.webp",
    period: "2023.02 ~ 현재",
    role: "클라이언트 개발 → 개발2팀 팀장 (2025.07~, 백엔드·최종 MR 검토)",
    serviceStats: {
      title: "Moii 서비스 지표",
      items: [
        { value: "약 59만", label: "누적 다운로드" },
        { value: "99.7%", label: "앱 안정성 (스토어 콘솔 기준)" },
      ],
    },
    summary: "글로벌 3D 소셜 서비스를 파티 게임으로 확장하며 성능, 실시간 동기화, 배포·운영을 개선하고 AI 기능을 추가",
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
          "**피드 웹뷰 전환:** Next.js 웹뷰로 콘텐츠 반영 ==최대 3일 → 5분== 단축, Unity·웹뷰 통신 프로토콜 통일",
          "**비개발자용 CMS:** 룰렛·배너·공지·미션을 스키마화해 앱 빌드·심사 없이 시즌 콘텐츠 즉시 반영",
          "**빌드 자동화:** iOS·Android 8개 파이프라인 구축으로 로컬 빌드 제거, 연간 ==2,000회+== 자동 배포",
          "**공용 모니터링:** Prometheus·Grafana·ELK 기반 장애 감지 및 리소스·오류 알림 체계 일원화",
        ],
        tech: ["Next.js", "S3", "CloudFront", "Jenkins", "Prometheus", "Grafana"],
      }),
      sub({
        name: "클라이언트 성능 최적화",
        details: clientPerformanceDetail,
        period: "2025.09 ~ 2026.02",
        summary: "프레임 드롭과 크래시의 원인을 프로파일러로 찾아 번들 구조와 데이터 포맷부터 개선",
        bullets: [
          "**셰이더 중복 제거:** 셰이더만 공용 번들로 통합하고 미사용 variant를 제거해 메모리 ==0.83GB → 약 1MB==, 크래시 제거",
          "**GC 스파이크 제거:** 아바타 데이터를 JSON에서 Protobuf로 전환해 GC 스파이크 제거 및 용량 ==70%== 절감",
          "**이미지 로드 최적화:** 비동기 로더 제작과 SubCanvas 분리로 Canvas 갱신 ==85.26ms → 36.05ms==, 텍스처 ==16MB → 1.5MB==",
        ],
        tech: ["Unity", "Addressables", "Asset Bundle", "Protobuf", "Profiler"],
      }),
      sub({
        name: "3D 실시간 멀티플레이 월드 개발",
        details: multiplayerWorldDetail,
        period: "2024.12 ~ 2025.05",
        summary: "서버 프로토콜을 바꾸지 않고 클라이언트 보간·외삽만으로 정원 16명의 위치를 끊김 없이 맞춘 실시간 3D 월드",
        bullets: [
          "**끊김 없는 이동:** 서버 프로토콜 변경 없이 한 틱 뒤 보간과 ==100ms== 상한 선형 외삽으로 저대역폭 끊김 해결",
          "**16명 동시 접속 검증:** Android·iOS 실기기 정원 ==16명==(20명 부하 테스트)에서 OOM 없음, 단절 시 자동 재동기화",
        ],
        tech: ["Unity", "WebSocket", "Snapshot Interpolation", "FSM"],
      }),
      sub({
        name: "AI 기능 (피드 봇 · Text to Animation)",
        details: moiiAiDetail,
        period: "2025.12 ~ 2026.04",
        summary: "가이드라인 검수를 통과한 콘텐츠만 실행하는 LangGraph 피드 봇과 pgvector 시맨틱 캐시 기반 Text to Animation 구축",
        bullets: [
          "**피드 봇 검수 분리:** LangGraph로 행동 결정·생성·검수를 나누고 검수를 통과한 결과만 서비스에 게시",
          "**말투 fine-tuning:** 실제 SNS 문체로 fine-tuning하고 세부 가이드는 few-shot을 병행해 피드 봇 ==7개== 운영",
          "**Text to Animation 캐시:** pgvector 시맨틱 캐시로 GPU 추론을 줄이고, 모션 리타게팅·영상 모션 추출 적용",
        ],
        tech: ["NestJS", "LangGraph", "LLM Fine-tuning", "Python", "pgvector", "MediaPipe", "Unity Humanoid"],
      }),
    ],
  },
];
