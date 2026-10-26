import type { Experience } from "@/types/resume";

export const experience: Experience[] = [
  {
    company: "일루니",
    role: "개발2팀 팀장 (2025.07~)",
    period: "2023.02 ~ 현재",
    badges: ["Unity Client", "Backend", "DevOps", "AI", "Team Lead"],
    bullets: [
      "Moii(3D 소셜 앱, 누적 다운로드 ==약 59만==, 앱 안정성 ==99.7%==)를 **2023.04 출시 때부터 개발**(초기 클라이언트 전체, 클라이언트 2명과 서버 1명 팀)하고, 현재 클라이언트·서버·운영 담당",
      "**신규 서비스:** Moiime에서 아바타 파츠 검색과 조립, 에셋 버전 관리와 증분 배포, 외부 서비스 연동용 SDK 개발. WISH TOWN은 약 ==2주== 만에 개발·배포(프로모션 페이지 오픈 첫 1시간 접속자 ==83,000명==), UMZIK은 설계부터 배포까지 개발",
      "**성능:** Protobuf 전환과 셰이더 번들 정리로 GC 스파이크를 없애고 에셋번들 로드 시 셰이더 크래시 ==제거==, SubCanvas 분리와 재활용 스크롤로 Canvas 갱신 시간 ==58%== 감소",
      "**실시간 동기화:** 고지연·저대역폭에서도 끊김 없는 이동을 위해 Snapshot Interpolation과 서버 틱 기반 FSM 동기화를 직접 구현",
      "**배포·운영:** 피드 웹뷰 전환으로 콘텐츠 반영 ==최대 3일 → 5분==, Jenkins로 로컬 빌드 제거, 마이크로서비스 분리에 참여하고 공유 모니터링 시스템(Prometheus·Grafana, Elasticsearch·Kibana) 구축",
      "**AI:** 시맨틱 캐시로 Text to Animation 캐시 hit 시 응답 ==약 3초==(miss 약 15초), LangGraph 기반 피드 봇 ==7개== 운영 자동화",
      "**팀:** 코드리뷰·Git Flow·WBS 정착, 기획·아트가 개발자 없이 쓰는 CMS 제작",
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
