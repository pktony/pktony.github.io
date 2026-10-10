import type { ProjectDetail } from "@/types/resume";

export const wishTownDetail: ProjectDetail = {
  sections: [
    {
      title: "프로모션 페이지에 삽입된 위젯",
      bullets: ["위시랜드(NCT WISH 프로모션 페이지) 안에 iframe으로 삽입되어 동작"],
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
      title: "기획자가 직접 쓰는 제작 도구",
      bullets: [
        "웹 편집 도구와 MCP로 기획자가 에셋 교체, 씬 설정, 개발환경 배포를 요청하고 결과를 확인",
        "에셋 편집은 **스프라이트시트 균등 자르기, 피봇·재생 속도, z-index 정렬, explode view**를 웹 도구에서 처리",
        "오브젝트 배치와 클릭 동작을 씬 설정으로 지정",
        "멤버·이웃, 미션·보상, 굿즈·예약 공개, 문구·번역 같은 **콘텐츠 운영**을 같은 도구에서 관리",
      ],
      images: [
        {
          src: "/project-details/wish-town/admin-scene-layers.webp",
          alt: "관리자 도구의 씬 편집 화면. 거리 풍경 씬의 레이어를 비스듬히 펼쳐 보며 편집",
          width: 1200,
          height: 675,
          caption: "씬 레이어 편집 화면",
        },
      ],
    },
    {
      title: "사용자 행동 로그 관측",
      bullets: [
        "위젯에서 로그를 **일정 시간 묶음**으로 수집하고 Lambda에서 평탄화한 뒤, 관리자 서버가 **매 정각 Athena로 집계**",
        "캐릭터 인기, 미션 완료, 오브젝트 클릭, 체류 시간, **신규/재방문 전환 단계**, 로딩 상태와 실패를 확인",
        "로그 검색, CSV 내보내기, 시간별 집계를 제공해 기획자가 사용자 행동을 확인",
      ],
    },
  ],
};
