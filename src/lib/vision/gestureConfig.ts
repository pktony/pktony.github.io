// 제스처 이름 ↔ 라벨 매핑
export const GESTURE_MAP: Record<string, number> = {
  beobgyu: 0,
  ok: 1,
  ddabong: 2,
  bad: 3,
  one: 4,
  two: 5,
  three: 6,
  four: 7,
  five: 8,
  fist: 9,
};

export const LABEL_NAME: Record<number, string> = Object.fromEntries(
  Object.entries(GESTURE_MAP).map(([k, v]) => [v, k]),
);

// 관절 연결 인덱스 (부모 → 자식)
export const PARENT = [0, 1, 2, 3, 0, 5, 6, 7, 0, 9, 10, 11, 0, 13, 14, 15, 0, 17, 18, 19];
export const CHILD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// 각도를 구할 벡터 쌍 인덱스
export const ANGLE_V1 = [0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 16, 17, 18];
export const ANGLE_V2 = [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18, 19];

// 손 연결선 (MediaPipe Hand Connections)
export const HAND_CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4],       // 엄지
  [0, 5], [5, 6], [6, 7], [7, 8],       // 검지
  [0, 9], [9, 10], [10, 11], [11, 12],  // 중지
  [0, 13], [13, 14], [14, 15], [15, 16], // 약지
  [0, 17], [17, 18], [18, 19], [19, 20], // 소지
  [5, 9], [9, 13], [13, 17],            // 손바닥 가로
];
