import type { NormalizedLandmark } from "./types";

// ── 공통 Canvas 유틸리티 ──

/** 정규화된 랜드마크를 픽셀 좌표로 변환 */
export function lmToPixel(
  lm: NormalizedLandmark,
  w: number,
  h: number,
): [number, number] {
  return [lm.x * w, lm.y * h];
}

/** 랜드마크 좌표를 좌우 반전 */
export function mirrorLandmarks(
  landmarks: NormalizedLandmark[],
): NormalizedLandmark[] {
  return landmarks.map((lm) => ({ ...lm, x: 1.0 - lm.x }));
}

/** 랜드마크 배열에서 정수 bbox 계산 */
export function computeBbox(
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
  pad = 10,
): { x1: number; y1: number; x2: number; y2: number } {
  const xs = landmarks.map((lm) => lm.x * frameW);
  const ys = landmarks.map((lm) => lm.y * frameH);
  return {
    x1: Math.max(0, Math.floor(Math.min(...xs) - pad)),
    y1: Math.max(0, Math.floor(Math.min(...ys) - pad)),
    x2: Math.min(frameW, Math.ceil(Math.max(...xs) + pad)),
    y2: Math.min(frameH, Math.ceil(Math.max(...ys) + pad)),
  };
}

// ── 재사용 가능한 모자이크 Canvas 풀 ──
let _tempCanvas: HTMLCanvasElement | null = null;
let _smallCanvas: HTMLCanvasElement | null = null;

function getTempCanvas(): HTMLCanvasElement {
  if (!_tempCanvas) _tempCanvas = document.createElement("canvas");
  return _tempCanvas;
}

function getSmallCanvas(): HTMLCanvasElement {
  if (!_smallCanvas) _smallCanvas = document.createElement("canvas");
  return _smallCanvas;
}

/** 지정 영역에 모자이크(다운샘플→업샘플) 적용 */
export function applyMosaicToRegion(
  ctx: CanvasRenderingContext2D,
  bbox: { x1: number; y1: number; x2: number; y2: number },
  smallSize?: { w: number; h: number },
): void {
  const w = bbox.x2 - bbox.x1;
  const h = bbox.y2 - bbox.y1;
  if (w <= 0 || h <= 0) return;

  const tempCanvas = getTempCanvas();
  tempCanvas.width = w;
  tempCanvas.height = h;
  const tempCtx = tempCanvas.getContext("2d")!;
  tempCtx.drawImage(ctx.canvas, bbox.x1, bbox.y1, w, h, 0, 0, w, h);

  const sw = smallSize?.w ?? Math.max(1, Math.floor(w / 30));
  const sh = smallSize?.h ?? Math.max(1, Math.floor(h / 30));

  const smallCanvas = getSmallCanvas();
  smallCanvas.width = sw;
  smallCanvas.height = sh;
  const smallCtx = smallCanvas.getContext("2d")!;
  smallCtx.imageSmoothingEnabled = true;
  smallCtx.drawImage(tempCanvas, 0, 0, sw, sh);

  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(bbox.x1, bbox.y1, w, h);
  ctx.drawImage(smallCanvas, 0, 0, sw, sh, bbox.x1, bbox.y1, w, h);
  ctx.restore();
}

// ── MediaPipe CDN URLs ──
export const MEDIAPIPE_WASM_URL =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm";

export const FACE_LANDMARKER_MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";

export const HAND_LANDMARKER_MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";
