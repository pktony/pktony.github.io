import { HAND_CONNECTIONS } from "./gestureConfig";
import { lmToPixel, applyMosaicToRegion } from "./canvasUtils";
import type { NormalizedLandmark } from "./types";

// 손 랜드마크 + 연결선 그리기
export function drawHandLandmarks(
  ctx: CanvasRenderingContext2D,
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
): void {
  // 연결선
  ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
  ctx.lineWidth = 2;
  for (const [start, end] of HAND_CONNECTIONS) {
    const [sx, sy] = lmToPixel(landmarks[start], frameW, frameH);
    const [ex, ey] = lmToPixel(landmarks[end], frameW, frameH);
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
  }

  // 관절 점 + 인덱스
  for (let i = 0; i < landmarks.length; i++) {
    const [x, y] = lmToPixel(landmarks[i], frameW, frameH);
    ctx.beginPath();
    ctx.fillStyle = "rgba(0, 255, 0, 0.9)";
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(255, 0, 0, 0.9)";
    ctx.font = "bold 10px monospace";
    ctx.fillText(String(i), x + 5, y - 5);
  }
}

// bbox + 제스처 이름 표시
export function drawHandBbox(
  ctx: CanvasRenderingContext2D,
  bbox: { x1: number; y1: number; x2: number; y2: number },
  gestureName: string,
  isBeobgyu: boolean,
): void {
  const color = isBeobgyu ? "rgba(255, 0, 0, 0.9)" : "rgba(0, 255, 0, 0.9)";

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.strokeRect(bbox.x1, bbox.y1, bbox.x2 - bbox.x1, bbox.y2 - bbox.y1);

  ctx.fillStyle = color;
  ctx.font = "bold 18px sans-serif";
  ctx.fillText(gestureName, bbox.x1, bbox.y1 - 8);
}

// 손 모자이크 (beobgyu 감지 시)
export function applyHandMosaic(
  ctx: CanvasRenderingContext2D,
  bbox: { x1: number; y1: number; x2: number; y2: number },
): void {
  applyMosaicToRegion(ctx, bbox, { w: 10, h: 10 });
}
