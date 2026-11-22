import type { Experience } from "@/types/resume";

export const experience: Experience[] = [
  {
    company: "일루니",
    role: "개발2팀 팀장 (2025.07~)",
    period: "2023.02 ~ 현재",
    badges: ["Unity Client", "Backend", "DevOps", "AI", "Team Lead"],
    bullets: [
      "3D 소셜 앱 Moii(다운로드 ==약 59만== · 안정성 ==99.7%==)를 **출시부터 개발**했고, 2025.07부터 개발2팀 팀장으로 클라이언트·서버·운영 총괄",
      "**신규 서비스 리드:** Moiime(3D 에셋 SaaS), UMZIK(AI 애니메이션), WISH TOWN(프로모션 위젯)의 아키텍처·AI·인프라 구축",
      "**배포·운영 자동화:** 피드 웹뷰 전환(==3일 → 5분==), 비개발자용 CMS, Jenkins 빌드(연 ==2,000회+==), 공용 모니터링·Sentry 정책 표준화",
      "**성능·실시간 동기화:** 셰이더 통합·Protobuf·비동기 로더로 크래시·GC 스파이크 제거(Canvas 갱신 ==58%== 단축) 및 16명 3D 동기화 구현",
      "**팀 표준화:** 코드리뷰·Git Flow·WBS를 정착시키고 팀 개발 규칙을 AI 에이전트 하네스로 구성",
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
  },
];
