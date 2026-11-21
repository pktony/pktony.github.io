// 허용 오차
export const TOLERANCE_EYE = 0.1;
export const TOLERANCE_NOSE_CHIN = 0.1;

// 모자이크 블록 크기
export const MOSAIC_BLOCK_SIZE = 30;

// ── 검사 1: 눈 수평 5등분 (왼쪽 → 오른쪽) ──
export const FACE_L = 127;
export const EYE_L_OUT = 130;
export const EYE_L_IN = 133;
export const EYE_R_IN = 362;
export const EYE_R_OUT = 446;
export const FACE_R = 356;

// ── 검사 2: 코밑-입-턱 수직 비율 ──
export const NOSE_BASE = 2;
export const MOUTH_TOP = 13;
export const MOUTH_BOT = 14;
export const CHIN = 152;

export const NOSE_MOUTH_TARGET = 1 / 3;

// ── 색상 (RGB) ──
export type Color = [number, number, number];

export const COLOR_EYE_SEG: Color[] = [
  [0, 200, 255],   // 얼굴왼 → 왼눈
  [255, 200, 0],   // 왼눈 너비
  [100, 255, 0],   // 눈 사이
  [255, 200, 0],   // 오른눈 너비
  [0, 200, 255],   // 오른눈 → 얼굴오른
];

export const COLOR_NOSE_MOUTH: Color = [255, 105, 180];
export const COLOR_MOUTH_CHIN: Color = [180, 105, 255];
export const COLOR_KEYPOINT: Color = [255, 255, 255];

export const COLOR_GOLDEN: Color = [0, 255, 0];
export const COLOR_NOT_GOLDEN: Color = [255, 0, 0];
export const COLOR_LANDMARK: Color = [255, 255, 0];

// 주요 랜드마크 레이블
export const KEY_LANDMARKS: Record<number, string> = {
  [FACE_L]: "face_L",
  [EYE_L_OUT]: "eye_L_out",
  [EYE_L_IN]: "eye_L_in",
  [EYE_R_IN]: "eye_R_in",
  [EYE_R_OUT]: "eye_R_out",
  [FACE_R]: "face_R",
  [NOSE_BASE]: "nose_base",
  [MOUTH_TOP]: "mouth_top",
  [MOUTH_BOT]: "mouth_bot",
  [CHIN]: "chin",
};
