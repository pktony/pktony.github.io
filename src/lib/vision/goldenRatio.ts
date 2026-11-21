import {
  FACE_L, EYE_L_OUT, EYE_L_IN, EYE_R_IN, EYE_R_OUT, FACE_R,
  NOSE_BASE, MOUTH_TOP, MOUTH_BOT, CHIN,
  NOSE_MOUTH_TARGET, TOLERANCE_EYE, TOLERANCE_NOSE_CHIN,
} from "./config";
import type { NormalizedLandmark, GoldenRatioResult } from "./types";

function pt(
  landmarks: NormalizedLandmark[],
  idx: number,
  frameW: number,
  frameH: number,
): [number, number] {
  const lm = landmarks[idx];
  return [lm.x * frameW, lm.y * frameH];
}

function project(
  p: [number, number],
  origin: [number, number],
  unit: [number, number],
): number {
  return (p[0] - origin[0]) * unit[0] + (p[1] - origin[1]) * unit[1];
}

export function isGoldenRatio(
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
  tolEye: number = TOLERANCE_EYE,
  tolNoseChin: number = TOLERANCE_NOSE_CHIN,
): GoldenRatioResult {
  const faceL = pt(landmarks, FACE_L, frameW, frameH);
  const eyeLOut = pt(landmarks, EYE_L_OUT, frameW, frameH);
  const eyeLIn = pt(landmarks, EYE_L_IN, frameW, frameH);
  const eyeRIn = pt(landmarks, EYE_R_IN, frameW, frameH);
  const eyeROut = pt(landmarks, EYE_R_OUT, frameW, frameH);
  const faceR = pt(landmarks, FACE_R, frameW, frameH);

  // face_l → face_r 방향 단위벡터
  const dx = faceR[0] - faceL[0];
  const dy = faceR[1] - faceL[1];
  const length = Math.sqrt(dx * dx + dy * dy);
  if (length === 0) return { isGolden: false, ratios: {} };

  const unit: [number, number] = [dx / length, dy / length];

  // 각 포인트를 직선에 정사영
  const points = [faceL, eyeLOut, eyeLIn, eyeRIn, eyeROut, faceR];
  const proj = points.map((p) => project(p, faceL, unit));

  const segments = [
    proj[1] - proj[0],
    proj[2] - proj[1],
    proj[3] - proj[2],
    proj[4] - proj[3],
    proj[5] - proj[4],
  ];
  const mean = segments.reduce((a, b) => a + b, 0) / segments.length;

  if (mean <= 0) return { isGolden: false, ratios: {} };

  const ratios: Record<string, number> = {
    "face_L → eye_L": segments[0] / mean,
    "left eye": segments[1] / mean,
    "between eyes": segments[2] / mean,
    "right eye": segments[3] / mean,
    "eye_R → face_R": segments[4] / mean,
  };

  const check1 = Object.values(ratios).every(
    (r) => Math.abs(r - 1.0) <= tolEye,
  );

  // ── 검사 2: 코밑 → 입중앙 → 턱끝 수직 비율 ──
  const noseBase = pt(landmarks, NOSE_BASE, frameW, frameH);
  const mouthMid: [number, number] = [
    ((landmarks[MOUTH_TOP].x + landmarks[MOUTH_BOT].x) / 2) * frameW,
    ((landmarks[MOUTH_TOP].y + landmarks[MOUTH_BOT].y) / 2) * frameH,
  ];
  const chin = pt(landmarks, CHIN, frameW, frameH);

  const vx = chin[0] - noseBase[0];
  const vy = chin[1] - noseBase[1];
  const vlen = Math.sqrt(vx * vx + vy * vy);

  let check2 = false;
  if (vlen > 0) {
    const vunit: [number, number] = [vx / vlen, vy / vlen];
    const tMouth = project(mouthMid, noseBase, vunit);
    const tChin = project(chin, noseBase, vunit);
    if (tChin > 0) {
      const rNoseMouth = tMouth / tChin;
      ratios["nose→mouth"] = rNoseMouth;
      ratios["mouth→chin"] = 1.0 - rNoseMouth;
      check2 =
        Math.abs(rNoseMouth - NOSE_MOUTH_TARGET) <=
        tolNoseChin * NOSE_MOUTH_TARGET;
    }
  }

  return { isGolden: check1 && check2, ratios };
}
