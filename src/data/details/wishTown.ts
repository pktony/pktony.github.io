import type { ProjectDetail } from "@/types/resume";

export const wishTownDetail: ProjectDetail = {
  id: "wish-town",
  sections: [
    {
      title: "위젯 삽입 & 서버 없는 정적 배포",
      bullets: [
        "**API 의존성 0건:** 60~95배 트래픽 급증을 정적 번들·원격 킬스위치만으로 받아내 30일간 중단·롤백 ==0건==",
        "**운영 결과:** 총 세션 ==250,483회==, 둘째 날부터 일일 세션의 ==41~57%==가 재방문 (오픈 첫 시간 로딩 실패율 2.4%)",
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
      title: "기획자용 제작 도구 & MCP 가드레일",
      bullets: [
        "**비개발자 셀프 운영:** 스프라이트·씬 레이어·예약 공개·다국어를 웹 도구와 사내 MCP로 개발자 없이 운영",
        "**AI 오조작 차단:** 삭제·배포·킬스위치에 미리보기 후 재확인하는 2단계 승인과 전체 쓰기 감사 로그를 적용",
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
      title: "엣지 로그 수집 & 정각 집계",
      bullets: [
        "**엣지 화이트리스트:** 허용된 이벤트만 CDN 엣지에서 통과시키고 위젯·엣지·집계 스키마 일치를 자동 테스트",
        "**셀프 관측:** CDN 로그를 매 정각 자동 집계해 기획자가 어드민에서 전환율·로딩 실패를 바로 조회·다운로드",
      ],
    },
  ],
};
