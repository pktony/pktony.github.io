import { PARENT, CHILD, ANGLE_V1, ANGLE_V2, LABEL_NAME } from "./gestureConfig";
import { computeBbox } from "./canvasUtils";
import type { NormalizedLandmark } from "./types";

export interface GestureResult {
  label: number;
  name: string;
  angles: number[];
  bbox: { x1: number; y1: number; x2: number; y2: number };
}

// 학습 데이터 타입
interface TrainingSample {
  angles: number[];
  label: number;
}

let trainingData: TrainingSample[] = [];

// CSV 학습 데이터 로드
export async function loadTrainingData(): Promise<void> {
  const res = await fetch("/data/gesture_train.csv");
  const text = await res.text();
  const lines = text.trim().split("\n");

  trainingData = lines.map((line) => {
    const values = line.split(",").map(Number);
    return {
      angles: values.slice(0, 15),
      label: values[15],
    };
  });
}

// 유클리드 거리
function euclideanDistance(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const d = a[i] - b[i];
    sum += d * d;
  }
  return Math.sqrt(sum);
}

// KNN 분류 (k=3)
function knnClassify(angles: number[], k = 3): number {
  if (trainingData.length === 0) return -1;

  const distances = trainingData.map((sample) => ({
    label: sample.label,
    dist: euclideanDistance(angles, sample.angles),
  }));

  distances.sort((a, b) => a.dist - b.dist);
  const topK = distances.slice(0, k);

  // 다수결 투표
  const votes: Record<number, number> = {};
  for (const { label } of topK) {
    votes[label] = (votes[label] ?? 0) + 1;
  }

  let bestLabel = -1;
  let bestCount = 0;
  for (const [label, count] of Object.entries(votes)) {
    if (count > bestCount) {
      bestCount = count;
      bestLabel = Number(label);
    }
  }
  return bestLabel;
}

// 관절 각도 계산 (Python beobgyu_filter.py와 동일)
function computeAngles(landmarks: NormalizedLandmark[]): number[] {
  const joint = landmarks.map((lm) => [lm.x, lm.y, lm.z]);

  // 벡터 계산: child - parent
  const vectors: number[][] = [];
  for (let i = 0; i < PARENT.length; i++) {
    const p = joint[PARENT[i]];
    const c = joint[CHILD[i]];
    vectors.push([c[0] - p[0], c[1] - p[1], c[2] - p[2]]);
  }

  // 정규화
  const normalized = vectors.map((v) => {
    const norm = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    if (norm === 0) return [0, 0, 0];
    return [v[0] / norm, v[1] / norm, v[2] / norm];
  });

  // 각도 계산
  const angles: number[] = [];
  for (let i = 0; i < ANGLE_V1.length; i++) {
    const a = normalized[ANGLE_V1[i]];
    const b = normalized[ANGLE_V2[i]];
    const dot = Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
    angles.push((Math.acos(dot) * 180) / Math.PI);
  }

  return angles;
}

// 제스처 감지
export function detectGesture(
  landmarks: NormalizedLandmark[],
  frameW: number,
  frameH: number,
): GestureResult {
  const angles = computeAngles(landmarks);
  const label = knnClassify(angles);
  const name = LABEL_NAME[label] ?? "unknown";
  const bbox = computeBbox(landmarks, frameW, frameH, 30);

  return { label, name, angles, bbox };
}
