import type { ProjectDetail } from "@/types/resume";

export const modularGridInventoryDetail: ProjectDetail = {
  sections: [
    {
      title: "데모 영상",
      bullets: [],
      videos: [{ youtubeId: "cyUhx101tj8", title: "Modular Grid Inventory 데모 영상", caption: "중첩 가방과 포켓 인벤토리 동작" }],
    },
    {
      title: "데이터 모델: 중첩 가방과 독립 포켓",
      bullets: [
        "**문제:** 가방 안에 가방이 들어가고 조끼처럼 칸마다 크기와 규칙이 달라 하나의 큰 격자로는 표현이 안 됨",
        "**선택:** 가방이 자기 컨테이너를 소유하고, 포켓은 각자 가로·세로를 가진 독립 격자로 둠. 수납 허용·금지는 컨테이너와 포켓 두 단계에 걸 수 있음",
        "**결과:** 가방을 옮겨도 내용물이 유지되고, 같은 정의의 가방도 서로 다른 창으로 열림",
      ],
    },
    {
      title: "패키지 구조와 제작 도구",
      bullets: [
        "**계층 분리:** Catalog, Domain, Presentation, Editor 등을 어셈블리로 나누고, Domain은 UnityEngine을 참조하지 않음",
        "**제작 도구:** Custom Inspector에서 포켓을 추가·삭제하고 레이아웃 미리보기를 보며 편집. 편집 한 번을 Undo 한 단계로 묶음",
      ],
      images: [
        {
          src: "/project-details/modular-grid-inventory/custom-inspector.webp",
          alt: "Unity Inspector에서 조끼 아이템 정의를 선택한 화면. 포켓 3개와 8칸 레이아웃 미리보기, 포켓 ID와 가로·세로 입력란",
          width: 452,
          height: 650,
          caption: "Custom Inspector의 포켓 레이아웃 미리보기",
        },
      ],
    },
  ],
};
