import type { Experience } from "@/types/resume";

export const experience: Experience[] = [
  {
    company: "일루니",
    role: "개발2팀 팀장",
    period: "2023.02 ~ 현재",
    badges: ["Unity Client", "Backend", "DevOps", "Team Lead"],
    bullets: [
      "**Moii · 3D 소셜 서비스:** 클라이언트 성능, 실시간 동기화, 서비스 운영 전반 개발. 개발자 4명이 단일 서버를 **19개 서비스로 분리**하고, 로그·알림 설계와 최종 MR 검토를 담당",
      "**성능 최적화:** JSON → Protobuf 전환으로 에셋 용량 70% 절감, Asset Bundle 중복 셰이더 정리로 Shader 메모리 0.83GB → 약 1MB",
      "**실시간 동기화:** Snapshot Interpolation과 제한된 Extrapolation으로 200kb/s 수준에서도 움직임 보간",
      "**배포 자동화:** Unity 피드를 Next.js 웹뷰로 전환해 콘텐츠 반영 3일 → 5분, 4개 프로젝트 iOS·Android 빌드를 8개 Jenkins 파이프라인으로 구성",
      "**관측·운영:** Prometheus·Fluent Bit 기반 지표·로그 수집과 임계치 알림, Claude 루틴으로 일일 운영 보고 자동화",
      "**팀 리딩:** 코드리뷰, 프로젝트 컨벤션, Git Flow, WBS 기반 일정 관리 체계 정착",
    ],
    metrics: [
      { value: "0.83GB → ~1MB", label: "Shader 메모리" },
      { value: "3일 → 5분", label: "콘텐츠 반영 시간" },
      { value: "70%", label: "에셋 용량 절감" },
      { value: "19", label: "마이크로서비스 분리" },
    ],
  },
  {
    company: "베셀에어로스페이스",
    role: "감항엔지니어",
    period: "2021.01 ~ 2022.02",
    badges: ["Aerospace", "Certification"],
    bullets: [
      "중국 항공기 형식인증 프로젝트에서 현지 직원, 인증 대행사와 **영어로 협업**",
      "검증 근거와 변경 이력을 남기는 문서화 경험을 개발 프로세스에 적용",
    ],
    metrics: [],
  },
];
