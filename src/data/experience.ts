import type { Experience } from "@/types/resume";

export const experience: Experience[] = [
  {
    company: "일루니",
    role: "개발2팀 팀장 (2025.07~)",
    period: "2023.02 ~ 현재",
    badges: ["Unity Client", "Backend", "DevOps", "AI", "Team Lead"],
    bullets: [
      "Moii(3D 소셜 앱, 누적 다운로드 ==약 59만==, 앱 안정성 ==99.7%==, 스토어 콘솔 기준)를 **2023.04 출시 때부터 개발**(초기 클라이언트 전체, 클라이언트 2명과 서버 1명 팀)하고, 현재 클라이언트·서버·운영 담당",
      "**신규 서비스:** Moiime(3D 캐릭터 에셋 SaaS) 개발 리드로 골든셋 평가 기반 LLM 비용 ==1/46== 절감, OAuth 2.1 MCP·Blender 애드온·VRChat VPM 배포, 해시 에셋 관리 툴·에셋 보호·리타게팅 알고리즘을 구축. WISH TOWN은 30일간 이용자 ==142,300명== 무중단 운영, UMZIK은 결제 중복 지급 방지와 AI 생성 시트 프레임 추출·부하 테스트 개발",
      "**AI:** AI 생성 시트를 검사해 깨진 결과는 실패와 환불로 처리(UMZIK 최종 실패율 ==2.1%==), 시맨틱 캐시로 Text to Animation의 GPU 추론 횟수를 줄이고, LangGraph 기반 피드 봇 ==7개== 운영 자동화",
      "**배포·운영:** 피드 웹뷰 전환으로 콘텐츠 반영 ==최대 3일 → 5분==, Jenkins로 로컬 빌드 제거(연 ==2,000회+==), 공유 모니터링(Prometheus·Grafana, Elasticsearch·Kibana) 및 웹 Sentry 수집 정책(Moiime·UMZIK 표준화) 구축",
      "**성능:** Protobuf 전환과 셰이더 번들 정리로 GC 스파이크를 없애고 에셋번들 로드 시 셰이더 크래시 ==제거==, SubCanvas 분리와 재활용 스크롤로 Canvas 갱신 시간 ==58%== 감소",
      "**실시간 동기화:** 고지연·저대역폭에서도 끊김 없는 이동을 위해 Snapshot Interpolation과 서버 틱 기반 FSM 동기화를 직접 구현",
      "**팀:** 코드리뷰·Git Flow·WBS 정착, 코드·네이밍·Git Flow 규칙을 AI 에이전트 하네스로 구성, 기획·아트가 개발자 없이 쓰는 CMS 제작",
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
