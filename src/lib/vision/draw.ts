import {
  FACE_L, EYE_L_OUT, EYE_L_IN, EYE_R_IN, EYE_R_OUT, FACE_R,
  NOSE_BASE, MOUTH_TOP, MOUTH_BOT, CHIN,
  COLOR_EYE_SEG, COLOR_NOSE_MOUTH, COLOR_MOUTH_CHIN, COLOR_KEYPOINT,
  COLOR_GOLDEN, COLOR_NOT_GOLDEN, COLOR_LANDMARK,
  KEY_LANDMARKS, MOSAIC_BLOCK_SIZE,
} from "./config";
import { lmToPixel, computeBbox, applyMosaicToRegion } from "./canvasUtils";
import type { NormalizedLandmark } from "./types";
import type { Color } from "./config";

function toRgba(color: Color, alpha = 1): string {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
}

// ── BBox 그리기 ──
export function drawBbox(
  ctx: CanvasRenderingContext2D,
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
  golden: boolean,
): void {
  const { x1, y1, x2, y2 } = computeBbox(landmarks, frameW, frameH);
  const color = golden ? COLOR_GOLDEN : COLOR_NOT_GOLDEN;
  const label = golden ? "Golden Ratio" : "Not Golden";

  ctx.strokeStyle = toRgba(color);
  ctx.lineWidth = 2;
  ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);

  ctx.font = "bold 14px sans-serif";
  ctx.fillStyle = toRgba(color);
  ctx.fillText(label, x1, y1 - 6);
}

// ── 눈 수평 5등분 비율선 ──
function projectedPts(
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
): [number, number][] {
  const indices = [FACE_L, EYE_L_OUT, EYE_L_IN, EYE_R_IN, EYE_R_OUT, FACE_R];
  const pts = indices.map((i) => lmToPixel(landmarks[i], frameW, frameH));

  const dx = pts[5][0] - pts[0][0];
  const dy = pts[5][1] - pts[0][1];
  const length = Math.sqrt(dx * dx + dy * dy);
  if (length === 0) return pts;

  const unit: [number, number] = [dx / length, dy / length];

  // 눈 4개 코너 중심
  const origin: [number, number] = [
    (pts[1][0] + pts[2][0] + pts[3][0] + pts[4][0]) / 4,
    (pts[1][1] + pts[2][1] + pts[3][1] + pts[4][1]) / 4,
  ];

  return pts.map((p) => {
    const t =
      (p[0] - origin[0]) * unit[0] + (p[1] - origin[1]) * unit[1];
    return [origin[0] + t * unit[0], origin[1] + t * unit[1]];
  });
}

export function drawEyeRatioLines(
  ctx: CanvasRenderingContext2D,
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
  ratios: Record<string, number>,
): void {
  if (Object.keys(ratios).length === 0) return;

  const proj = projectedPts(landmarks, frameW, frameH);
  const keys = Object.keys(ratios);

  for (let i = 0; i < 5; i++) {
    const color = COLOR_EYE_SEG[i];
    const [x1, y1] = proj[i];
    const [x2, y2] = proj[i + 1];

    // 선
    ctx.beginPath();
    ctx.strokeStyle = toRgba(color);
    ctx.lineWidth = 2;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // 점
    for (const [px, py] of [proj[i], proj[i + 1]]) {
      ctx.beginPath();
      ctx.fillStyle = toRgba(color);
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // 비율 텍스트
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const ratioVal = ratios[keys[i]] ?? 0;
    ctx.font = "bold 16px sans-serif";
    ctx.fillStyle = toRgba(color);
    ctx.fillText(ratioVal.toFixed(2), midX - 16, midY - 10);
  }
}

// ── 코밑-입-턱 수직 비율선 ──
export function drawNoseChinLines(
  ctx: CanvasRenderingContext2D,
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
  ratios: Record<string, number>,
): void {
  if (!("nose→mouth" in ratios)) return;

  const nose = lmToPixel(landmarks[NOSE_BASE], frameW, frameH);
  const mouth: [number, number] = [
    ((landmarks[MOUTH_TOP].x + landmarks[MOUTH_BOT].x) / 2) * frameW,
    ((landmarks[MOUTH_TOP].y + landmarks[MOUTH_BOT].y) / 2) * frameH,
  ];
  const chin = lmToPixel(landmarks[CHIN], frameW, frameH);

  // 코→입 선
  ctx.beginPath();
  ctx.strokeStyle = toRgba(COLOR_NOSE_MOUTH);
  ctx.lineWidth = 2;
  ctx.moveTo(nose[0], nose[1]);
  ctx.lineTo(mouth[0], mouth[1]);
  ctx.stroke();

  // 입→턱 선
  ctx.beginPath();
  ctx.strokeStyle = toRgba(COLOR_MOUTH_CHIN);
  ctx.lineWidth = 2;
  ctx.moveTo(mouth[0], mouth[1]);
  ctx.lineTo(chin[0], chin[1]);
  ctx.stroke();

  // 키포인트
  for (const pt of [nose, mouth, chin]) {
    ctx.beginPath();
    ctx.fillStyle = toRgba(COLOR_KEYPOINT);
    ctx.arc(pt[0], pt[1], 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // 비율 텍스트
  ctx.font = "bold 16px sans-serif";
  ctx.fillStyle = toRgba(COLOR_NOSE_MOUTH);
  ctx.fillText(
    `${ratios["nose→mouth"].toFixed(3)} (0.333)`,
    nose[0] + 6,
    (nose[1] + mouth[1]) / 2,
  );
  ctx.fillStyle = toRgba(COLOR_MOUTH_CHIN);
  ctx.fillText(
    `${ratios["mouth→chin"].toFixed(3)} (0.667)`,
    mouth[0] + 6,
    (mouth[1] + chin[1]) / 2,
  );
}

// ── 랜드마크 인덱스 표시 ──
export function drawLandmarkIndices(
  ctx: CanvasRenderingContext2D,
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
): void {
  ctx.font = "10px sans-serif";
  for (const [idxStr, label] of Object.entries(KEY_LANDMARKS)) {
    const idx = Number(idxStr);
    const [x, y] = lmToPixel(landmarks[idx], frameW, frameH);

    ctx.beginPath();
    ctx.fillStyle = toRgba(COLOR_LANDMARK);
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = toRgba(COLOR_LANDMARK);
    ctx.fillText(`${idx}:${label}`, x + 4, y - 4);
  }
}

// ── 모자이크 ──
export function applyMosaic(
  ctx: CanvasRenderingContext2D,
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
  blockSize: number = MOSAIC_BLOCK_SIZE,
): void {
  const bbox = computeBbox(landmarks, frameW, frameH);
  const w = bbox.x2 - bbox.x1;
  const h = bbox.y2 - bbox.y1;
  if (w <= 0 || h <= 0) return;

  const smallW = Math.max(1, Math.floor(w / blockSize));
  const smallH = Math.max(1, Math.floor(h / blockSize));
  applyMosaicToRegion(ctx, bbox, { w: smallW, h: smallH });
}

// ── 면 메시 (간단한 점 기반) ──
export function drawMesh(
  ctx: CanvasRenderingContext2D,
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
): void {
  ctx.fillStyle = "rgba(0, 255, 0, 0.15)";
  for (const lm of landmarks) {
    const [x, y] = lmToPixel(lm, frameW, frameH);
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, Math.PI * 2);
    ctx.fill();
  }
}
