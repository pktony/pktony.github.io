import type { ProjectDetail } from "@/types/resume";

export const wishTownDetail: ProjectDetail = {
  id: "wish-town",
  sections: [
    {
      title: "프로모션 페이지에 삽입된 위젯",
      bullets: [
        "위시랜드(NCT WISH 프로모션 페이지) 안에 script 태그 한 줄로 삽입되어 iframe으로 동작하며, 호스트 페이지 html lang 속성을 따라 다국어로 자동 전환",
      ],
      images: [
        {
          src: "/project-details/wish-town/widget-embedded.webp",
          alt: "위시랜드 프로모션 페이지 오른쪽 아래에 WISH TOWN 위젯이 삽입된 화면",
          width: 1200,
          height: 675,
          caption: "위시랜드 페이지에 삽입된 위젯",
        },
      ],
    },
    {
      title: "기획자용 제작 도구 & 안전 가드레일 MCP",
      bullets: [
        "**웹 편집 도구 + MCP:** 기획자가 개발자를 거치지 않고 에셋 교체·씬 설정·개발환경 배포를 직접 처리(서비스 기간 MCP 호출 ==약 4,700건==)",
        "**에셋·씬·콘텐츠 편집:** 스프라이트시트 자르기·피봇·재생 속도·z-index·explode view, 오브젝트 배치·클릭 동작, 멤버·미션·굿즈 예약 공개·다국어 번역을 한 도구에서 운영",
        "**MCP 오조작 차단 가드레일:** 삭제·씬 전체 교체·publish·킬스위치에는 confirm 없이 미리보기만 반환하는 2단계 승인을 적용. 전체 교체 PUT API는 현재 값을 먼저 읽어 지정 필드만 덮어씌우고, 모든 쓰기 호출은 사용자·도구·인자 감사 로그로 기록",
      ],
      images: [
        {
          src: "/project-details/wish-town/admin-scene-layers.webp",
          alt: "제작 도구의 씬 편집 화면. 거리 풍경 씬의 레이어를 비스듬히 펼쳐 보며 편집",
          width: 1200,
          height: 675,
          caption: "씬 레이어 편집 화면",
        },
      ],
    },
    {
      title: "엣지 비콘 & Athena 집계 파이프라인",
      bullets: [
        "**엣지 이벤트 화이트리스트 & 계약 테스트:** 위젯 행동 로그를 CDN GET 비콘(credentials:omit)으로 보내고, CloudFront Function에서 허용 12개 이벤트 외 배치는 400으로 차단. 위젯 EVENT_TYPES·엣지 정규식·Athena SQL의 일치를 자동 테스트(cdn-only.test.ts)로 검증",
        "**정각 집계 & 어드민 셀프 관측:** CloudFront 표준 로그(Parquet)를 Athena CTAS(10GB 스캔 상한)와 Lambda 트랜잭션으로 매 정각 daily_stat에 멱등 교체(세션 일일 10,000행 초과 봇 제외). 기획자가 어드민에서 미션 완료·재방문 전환·로딩 실패를 검색과 CSV로 직접 확인",
      ],
    },
    {
      title: "API 의존성 0건 정적 배포 & 30일 무중단 운영",
      bullets: [
        "**늘릴 것을 남기지 않는 구조:** 컴백 당일 평시 대비 60~95배 트래픽 급증에 오토스케일링 대신 위젯 런타임의 API 서버 의존성을 ==0건==으로 제거. 무손실 WebP·씬별 SHA-256 ZIP 번들·킬스위치와 파트너 페이지 bfcache 보존(unload 금지)·모바일 44px 터치 타깃 기준을 적용",
        "**서비스 중단 0건:** 30일간 매시간 세션이 유입됐으며 킬스위치·롤백·핫픽스 ==0건==. 접속이 가장 몰린 오픈 첫 시간에도 로딩 실패율 2.4%",
        "**개별 로딩 실패 추적:** 전체 로딩 시도의 2.7%(6,405건, 대부분 네트워크 에셋 수신 실패)를 원인별로 분류해 기록",
      ],
    },
    {
      title: "30일 운영 결과",
      bullets: [
        "**이용자:** 2026.10.06 ~ 11.04 이용자 ==142,300명==, 세션 ==250,483회==. 오픈 첫날 전체의 77%(==109,605명==) 유입",
        "**재방문:** 위젯을 2번 이상 연 이용자 ==29.3%==. 둘째 날부터 매일 세션의 41~57%가 재방문",
      ],
    },
  ],
};
