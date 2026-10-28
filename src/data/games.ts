import type { Game } from "@/types/game";

export const games: Game[] = [
  {
    slug: "modular-grid-inventory",
    name: "Modular Grid Inventory",
    category: "인벤토리 시스템",
    summary: "중첩 가방과 독립 포켓, 회전·스택을 지원하는 격자 인벤토리.",
    description: "가방마다 독립적인 내용물과 창을 갖습니다. 아이템 크기·스택 수량·수납 유형과 포켓 배치를 설정하고, 드롭한 위치에 맞춰 이동·회전·수납을 검증합니다.",
    status: "WebGL 준비 중",
    image: { src: "/games/images/inventory.webp", alt: "중첩 가방과 여러 인벤토리 창이 열린 실제 Unity 화면", width: 1920, height: 1080 },
    tags: ["중첩 컨테이너", "독립 포켓", "Custom Inspector"],
    controls: [
      { key: "드래그", action: "아이템·창 이동" },
      { key: "R", action: "드래그 중 회전" },
      { key: "Esc", action: "취소·창 닫기" },
      { key: "더블클릭", action: "가방 열기" },
      { key: "우클릭", action: "스택 분할 메뉴" },
      { key: "Delete", action: "선택 아이템 삭제" },
    ],
    video: "https://youtu.be/cyUhx101tj8",
    source: "https://github.com/pktony/modular-grid-inventory",
  },
  {
    slug: "planet",
    name: "숲속 유적 행성",
    category: "3인칭 파쿠르",
    summary: "작은 행성의 중력을 따라 숲속 유적을 탐험하는 파쿠르.",
    description: "작은 행성 전체를 이동하며 유적을 탐험하는 3인칭 파쿠르 게임입니다. 대표 이미지는 실제 Unity 화면이며, 웹 데모를 준비 중입니다.",
    status: "개발 중",
    image: { src: "/games/images/planet.webp", alt: "숲속 유적 행성 파쿠르 게임의 실제 Unity 화면", width: 1920, height: 1080 },
    tags: ["구면 이동", "탐험", "파쿠르"],
  },
  {
    slug: "stack-up",
    name: "Stack Up",
    category: "타이밍 아케이드",
    summary: "타이밍에 맞춰 블록을 쌓아 올리는 캐주얼 게임.",
    description: "포트폴리오를 위해 제작한 블록 쌓기 게임입니다. 대표 화면과 배포할 빌드를 준비하고 있습니다. 썸네일은 콘셉트 이미지입니다.",
    status: "빌드 확인 중",
    image: { src: "/games/images/stack-up.svg", alt: "블록을 쌓는 Stack Up 콘셉트 일러스트", width: 560, height: 350, concept: true },
    tags: ["타이밍", "캐주얼"],
  },
];
