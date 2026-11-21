export interface Point {
  x: number;
  y: number;
}

export interface NormalizedLandmark {
  x: number;
  y: number;
  z: number;
}

export interface GoldenRatioResult {
  isGolden: boolean;
  ratios: Record<string, number>;
}

export interface ControlValues {
  tolEye: number;
  tolNoseChin: number;
  showMesh: boolean;
  showLines: boolean;
  showIndices: boolean;
  showBbox: boolean;
  showMosaic: boolean;
}

export interface FaceBbox {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface HandGestureInfo {
  name: string;
  isBeobgyu: boolean;
}

export type InputSource =
  | { type: "camera" }
  | { type: "image"; url: string }
  | { type: "video"; url: string };
