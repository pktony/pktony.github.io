import type { Game } from "@/types/game";
import webglBuilds from "../../config/webgl-builds.json";

export const games: Game[] = [
  {
    slug: "dialogue-flow",
    name: "Dialogue Flow",
    category: "RPG 대화 시스템",
    summary: "선택지와 퀘스트에 따라 달라지는 대화, 실행 중인 그래프를 보여주는 탑뷰 RPG.",
    status: "브라우저에서 플레이",
    build: webglBuilds.find(entry => entry.slug === "dialogue-flow")?.build,
    image: { src: "/games/images/dialogue-flow.jpg", alt: "영어 대화 선택지와 현재 실행 중인 그래프가 표시된 Dialogue Flow", width: 1712, height: 820 },
    video: "https://youtu.be/jqX0dpysCXU",
    source: "https://github.com/pktony/DialogueFlow",
  },
  {
    slug: "modular-grid-inventory",
    name: "Modular Grid Inventory",
    category: "인벤토리 시스템",
    summary: "중첩 가방과 독립 포켓, 회전·스택을 지원하는 격자 인벤토리.",
    status: "브라우저에서 플레이",
    build: webglBuilds.find(entry => entry.slug === "modular-grid-inventory")?.build,
    image: { src: "/games/images/inventory.webp", alt: "중첩 가방과 여러 인벤토리 창이 열린 실제 Unity 화면", width: 1920, height: 1080 },
    video: "https://youtu.be/cyUhx101tj8",
    source: "https://github.com/pktony/modular-grid-inventory",
  },
  {
    slug: "planet",
    name: "숲속 유적 행성",
    category: "3인칭 파쿠르",
    summary: "작은 행성의 중력을 따라 숲속 유적을 탐험하는 파쿠르.",
    status: "개발 중",
    image: { src: "/games/images/planet.webp", alt: "숲속 유적 행성 파쿠르 게임의 실제 Unity 화면", width: 1920, height: 1080 },
  },
  {
    slug: "stack-up",
    name: "Stack Up",
    category: "타이밍 아케이드",
    summary: "타이밍에 맞춰 블록을 쌓아 올리는 캐주얼 게임.",
    status: "빌드 확인 중",
    image: { src: "/games/images/stack-up.svg", alt: "블록을 쌓는 Stack Up 콘셉트 일러스트", width: 560, height: 350, concept: true },
  },
];
