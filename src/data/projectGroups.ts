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
    role: "출시 때부터 클라이언트 개발, 2025.07부터 개발2팀 팀장 (백엔드 일부 도메인, 최종 MR 검토)",
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
          "**피드 웹뷰 전환:** 피드를 Next.js 웹뷰로 전환해 콘텐츠 반영 ==최대 3일 → 5분==. Unity가 WebSocket 연결을 맡아 결과를 웹뷰에 전달하고, TypeScript·C# 메시지 타입을 대응시킨 통일 프로토콜로 중복 처리를 방지",
          "**운영 콘텐츠 CMS:** DB → CMS → S3·CloudFront → 클라이언트 구조로 룰렛·배너·공지·미션을 스키마화해 비개발자가 시즌 콘텐츠를 빌드·심사 없이 즉시 반영",
          "**빌드 자동화:** 4개 프로젝트의 iOS·Android 빌드를 ==8개== 파이프라인으로 자동화해 약 25분간 PC를 점유하던 로컬 빌드를 제거하고 연간 ==2,000회 이상== 빌드를 운영. Slack, Firebase App Distribution, TestFlight 연동",
          "**공용 모니터링·알림:** 여러 서비스가 공유하는 모니터링(Prometheus·Grafana, Elasticsearch·Kibana)과 메모리·CPU·오류 알림을 구축해 장애 감지 체계를 일원화",
        ],
        tech: ["Next.js", "S3", "CloudFront", "Jenkins", "Prometheus", "Grafana"],
      }),
      sub({
        name: "클라이언트 성능 최적화",
        details: clientPerformanceDetail,
        period: "2025.09 ~ 2026.02",
        summary: "프레임 드롭과 크래시의 원인을 프로파일러로 찾아 번들 구조와 데이터 포맷부터 개선",
        bullets: [
          "**셰이더 중복 제거:** 파츠 전체를 Addressable로 옮기는 대신 셰이더만 공용 번들로 통합하고 미사용 variant를 제거. 아바타 2명 로드 기준 Shader 메모리 ==0.83GB → 약 1MB==(47개 → 6개), 런타임 셰이더 크래시 제거",
          "**역직렬화 GC 스파이크 제거:** 파싱 코드가 아니라 데이터 포맷 문제로 판단해 아바타 스키마를 JSON에서 Protobuf로 전환(gzip·FlatBuffers 검토 후 선택). GC 스파이크 제거, 에셋 용량 ==70%== 절감",
          "**이미지 로드 프레임 드롭 해결:** 기성 API의 메인 스레드 디코딩 병목을 자체 비동기 이미지 로더와 SubCanvas 분리로 해결. Canvas 갱신 ==85.26ms → 36.05ms==(Deep Profiling 기준), 텍스처 메모리 ==16MB → 약 1.5MB==",
        ],
        tech: ["Unity", "Addressables", "Asset Bundle", "Protobuf", "Profiler"],
      }),
      sub({
        name: "3D 실시간 멀티플레이 월드 개발",
        details: multiplayerWorldDetail,
        period: "2024.12 ~ 2025.05",
        summary: "서버 프로토콜을 바꾸지 않고 클라이언트 보간·외삽만으로 정원 16명의 위치를 끊김 없이 맞춘 실시간 3D 월드",
        bullets: [
          "**끊김 없는 이동:** TCP 재전송으로 위치 정보가 늦게 몰려와 생기는 멈춤을, 파티 게임에 과하게 복잡한 Dead Reckoning 대신 한 틱 뒤 보간과 ==100ms== 상한 단순 선형 외삽으로 해결(200kb/s 저대역폭 환경 검증)",
          "**16명 동시 접속 검증:** 라이브 정원 ==16명==(Android·iOS 실기기)에서 프레임 저하·OOM 없음, ==20명==까지 테스트. 네트워크 단절 시 자동 재연결 후 서버 틱 기반 FSM으로 상태·위치 재동기화",
        ],
        tech: ["Unity", "WebSocket", "Snapshot Interpolation", "FSM"],
      }),
      sub({
        name: "AI 기능 (피드 봇 · Text to Animation)",
        details: moiiAiDetail,
        period: "2025.12 ~ 2026.04",
        summary: "가이드라인 검수를 통과한 콘텐츠만 실행하는 LangGraph 피드 봇과 pgvector 시맨틱 캐시 기반 Text to Animation 구축",
        bullets: [
          "**피드 봇 생성·실행 분리:** 가이드라인 준수·맥락·봇별 말투를 한 프롬프트로 지키기 어려워 LangGraph로 행동 결정·생성·검수 단계를 분리하고, 검수를 통과한 결과만 서비스 API로 실행(거절 시 종료)",
          "**말투 fine-tuning:** 일반 프롬프트의 AI 말투와 few-shot 편향을 해결하기 위해 실제 SNS 문체로 fine-tuning하고 세부 가이드는 few-shot을 병행해 피드 봇 7개 운영",
          "**Text to Animation 시맨틱 캐시 & 리타게팅:** 매 요청마다 GPU 추론을 돌리지 않도록 pgvector 유사도 검색 기반 시맨틱 캐시·기준값 조정 도구를 구현하고, SMPL-H 52 joints → Unity Humanoid 22 joints 리타게팅 및 MediaPipe 영상 애니메이션 추출 적용",
        ],
        tech: ["NestJS", "LangGraph", "LLM Fine-tuning", "Python", "pgvector", "MediaPipe", "Unity Humanoid"],
      }),
    ],
  },
];
