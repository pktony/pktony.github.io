export type PlaygroundGroup = "vision" | "unity";

export type PlaygroundItem = {
  slug: string;
  group: PlaygroundGroup;
  name: string;
  category: string;
  summary: string;
  status: string;
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    contain?: boolean;
  };
};

export const playgroundItems: PlaygroundItem[] = [
  {
    slug: "golden-ratio",
    group: "vision",
    name: "Golden Ratio · 황금비율 필터",
    category: "Computer Vision · Face Landmarker",
    summary: "실시간 웹캠으로 얼굴 5등분·코-입-턱 황금비율을 분석하고 비황금비 영역을 모자이크 처리하는 클라이언트 CV 도구",
    status: "브라우저에서 실행",
    href: "/playground/golden-ratio/",
    image: {
      src: "/playground/golden-ratio.svg",
      alt: "얼굴 랜드마크 5등분과 코-입-턱 황금비율 측정 가이드가 표시된 Golden Ratio 시각화",
      width: 800,
      height: 500,
    },
  },
  {
    slug: "beobgyu-filter",
    group: "vision",
    name: "Beobgyu Filter · 손 제스처 필터",
    category: "Computer Vision · Hand Landmarker · KNN",
    summary: "21개 손 관절의 15개 각도를 KNN(k=3)으로 분류해 10종 제스처를 인식하고 특정 제스처를 자동 모자이크 처리(웹캠·사진·영상 지원)",
    status: "브라우저에서 실행",
    href: "/playground/beobgyu-filter/",
    image: {
      src: "/playground/beobgyu-filter.svg",
      alt: "21개 손 관절 골격과 KNN 제스처 분류·자동 모자이크 처리가 표시된 Beobgyu Filter 시각화",
      width: 800,
      height: 500,
    },
  },
  {
    slug: "modular-grid-inventory",
    group: "unity",
    name: "Modular Grid Inventory",
    category: "Unity · 인벤토리 시스템",
    summary: "중첩 가방과 독립 포켓, 수납 규칙·회전·스택을 지원하는 격자 인벤토리 Unity 패키지(자동 테스트 125건)",
    status: "브라우저에서 플레이",
    href: "/games/modular-grid-inventory/",
    image: {
      src: "/games/images/inventory.webp",
      alt: "중첩 가방과 여러 인벤토리 창이 열린 실제 Unity 화면",
      width: 1920,
      height: 1080,
      contain: true,
    },
  },
  {
    slug: "dialogue-flow",
    group: "unity",
    name: "Dialogue Flow",
    category: "Unity · RPG 대화 시스템",
    summary: "선택지와 퀘스트에 따라 분기되는 대화와 실행 중인 그래프를 실시간으로 보여주는 탑뷰 RPG",
    status: "브라우저에서 플레이",
    href: "/games/dialogue-flow/",
    image: {
      src: "/games/images/dialogue-flow.jpg",
      alt: "영어 대화 선택지와 현재 실행 중인 그래프가 표시된 Dialogue Flow",
      width: 1712,
      height: 820,
    },
  },
];
