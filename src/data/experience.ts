import type { Experience } from "@/types/resume";

export const experience: Experience[] = [
  {
    company: "일루니",
    role: "개발2팀 팀장",
    period: "2023.02 ~ 현재",
    badges: ["Unity Client", "Backend", "DevOps", "Team Lead"],
    bullets: [
      "Moii(3D 소셜 앱)의 클라이언트·서버·운영을 맡고, Moiime·UMZIK·WISH TOWN을 설계부터 배포까지 개발. **4명 리딩**",
      "**성능:** JSON → Protobuf 전환으로 GC 스파이크를 없애고, Asset Bundle 중복 셰이더를 정리해 에셋번들 로드 시 셰이더로 인한 **크래시를 제로**로 만듦",
      "**실시간 동기화:** 고지연·저대역폭 환경에서 끊김 없는 이동을 위해 Snapshot Interpolation과 Extrapolation을 직접 구현하고, 서버 틱 기반 FSM으로 상태 동기화",
      "**UI:** 비동기 재활용 스크롤과 SubCanvas 분리로 렌더링 피크 **50%** 감소, 이미지 텍스처 메모리 약 **90%** 절감",
      "**배포·운영:** 피드를 웹뷰로 전환해 스토어 심사 없이 반영하고, Jenkins 파이프라인으로 로컬 빌드를 없앰. 마이크로서비스 분리에 참여(일부 도메인 개발, 로그·알림 설계, 최종 MR 검토)",
      "**팀:** 코드리뷰·Git Flow·WBS 정착, 기획·아트가 개발자 없이 쓰는 CMS와 파츠 뷰어 제작",
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
