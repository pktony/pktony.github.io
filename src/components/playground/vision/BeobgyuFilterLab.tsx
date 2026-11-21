"use client";

import { useState, useCallback, useRef } from "react";
import { LABEL_NAME } from "@/lib/vision/gestureConfig";
import type { HandGestureInfo, InputSource } from "@/lib/vision/types";
import { BeobgyuDetector } from "./BeobgyuDetector";
import styles from "./vision.module.css";

const HAND_COLORS = [
  { color: "var(--accent-cyan)", dim: "var(--accent-cyan-dim)", label: "L" },
  { color: "var(--accent-amber)", dim: "var(--accent-amber-dim)", label: "R" },
];

type SourceMode = "camera" | "upload";

export function BeobgyuFilterLab() {
  const [hands, setHands] = useState<HandGestureInfo[]>([]);
  const [mode, setMode] = useState<SourceMode>("camera");
  const [source, setSource] = useState<InputSource>({ type: "camera" });
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const objectUrlRef = useRef<string | null>(null);

  const handleGesture = useCallback((newHands: HandGestureInfo[]) => {
    setHands(newHands);
  }, []);

  const cleanupObjectUrl = () => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
  };

  const switchToCamera = () => {
    cleanupObjectUrl();
    setMode("camera");
    setSource({ type: "camera" });
    setFileName(null);
    setHands([]);
  };

  const switchToUpload = () => {
    setMode("upload");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    cleanupObjectUrl();
    setHands([]);

    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;
    setFileName(file.name);

    if (file.type.startsWith("image/")) {
      setSource({ type: "image", url });
    } else if (file.type.startsWith("video/")) {
      setSource({ type: "video", url });
    }

    e.target.value = "";
  };

  const sourceLabel =
    source.type === "camera" ? "LIVE FEED" : source.type === "image" ? "IMAGE" : "VIDEO";

  return (
    <div className={styles.visionRoot}>
      <div className={styles.visionContainer}>
        <div className={`mb-6 ${styles.fadeUp}`}>
          <div className="mb-2 flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg font-mono font-bold"
              style={{
                background: "var(--accent-amber-dim)",
                color: "var(--accent-amber)",
                border: "1px solid var(--accent-amber)",
                fontSize: "12px",
              }}
            >
              BGU
            </div>
            <div>
              <h1 className="text-title font-bold tracking-wide" style={{ color: "var(--text-primary)" }}>
                BEOBGYU FILTER
              </h1>
              <p className="text-meta" style={{ color: "var(--accent-amber)" }}>
                손 제스처 인식 필터 · MediaPipe Hand Landmarker + KNN
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <div className={`flex-1 ${styles.fadeUp}`} style={{ animationDelay: "0.08s" }}>
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                className="flex items-center justify-between px-4 py-2.5"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${source.type === "camera" ? styles.pulseDot : ""}`}
                    style={{
                      background:
                        source.type === "camera" ? "var(--accent-red)" : "var(--accent-amber)",
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{ color: "var(--text-muted)", fontSize: "11px" }}
                  >
                    {sourceLabel}
                  </span>
                  {fileName && (
                    <span
                      className="max-w-[180px] truncate font-mono"
                      style={{ color: "var(--text-muted)", fontSize: "11px" }}
                    >
                      — {fileName}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {hands.length === 0 ? (
                    <span
                      className="font-mono"
                      style={{ color: "var(--text-muted)", fontSize: "12px" }}
                    >
                      HANDS: 0
                    </span>
                  ) : (
                    hands.map((hand, i) => (
                      <span
                        key={i}
                        className="font-mono"
                        style={{ color: "var(--text-secondary)", fontSize: "12px" }}
                      >
                        <span style={{ color: HAND_COLORS[i % HAND_COLORS.length].color }}>
                          {HAND_COLORS[i % HAND_COLORS.length].label}
                        </span>
                        :{" "}
                        <span
                          style={{
                            color: hand.isBeobgyu
                              ? "var(--accent-red)"
                              : "var(--text-primary)",
                          }}
                        >
                          {hand.name || "NONE"}
                        </span>
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <button
                  type="button"
                  onClick={switchToCamera}
                  className="cursor-pointer rounded-lg px-3 py-1.5 font-mono transition-all"
                  style={{
                    fontSize: "12px",
                    background: mode === "camera" ? "var(--accent-amber-dim)" : "var(--bg-secondary)",
                    color: mode === "camera" ? "var(--accent-amber)" : "var(--text-muted)",
                    border: `1px solid ${mode === "camera" ? "var(--accent-amber)" : "var(--border-subtle)"}`,
                  }}
                >
                  CAMERA
                </button>
                <button
                  type="button"
                  onClick={switchToUpload}
                  className="cursor-pointer rounded-lg px-3 py-1.5 font-mono transition-all"
                  style={{
                    fontSize: "12px",
                    background: mode === "upload" ? "var(--accent-amber-dim)" : "var(--bg-secondary)",
                    color: mode === "upload" ? "var(--accent-amber)" : "var(--text-muted)",
                    border: `1px solid ${mode === "upload" ? "var(--accent-amber)" : "var(--border-subtle)"}`,
                  }}
                >
                  UPLOAD
                </button>

                {mode === "upload" && (
                  <>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="ml-auto cursor-pointer rounded-lg px-3 py-1.5 font-mono transition-all"
                      style={{
                        fontSize: "12px",
                        background: "var(--bg-secondary)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      SELECT FILE
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </>
                )}
              </div>

              {mode === "upload" && source.type === "camera" ? (
                <div
                  className="flex items-center justify-center"
                  style={{ background: "var(--bg-primary)", minHeight: "340px" }}
                >
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="group cursor-pointer text-center"
                  >
                    <div
                      className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl transition-all group-hover:scale-105"
                      style={{
                        background: "var(--bg-secondary)",
                        border: "2px dashed var(--border-subtle)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </div>
                    <p
                      className="mb-1 font-mono"
                      style={{ color: "var(--text-secondary)", fontSize: "13px" }}
                    >
                      사진 또는 영상을 선택하세요
                    </p>
                    <p
                      className="font-mono"
                      style={{ color: "var(--text-muted)", fontSize: "11px" }}
                    >
                      IMAGE / VIDEO
                    </p>
                  </button>
                </div>
              ) : (
                <BeobgyuDetector
                  key={source.type === "camera" ? "camera" : source.url}
                  source={source}
                  onGesture={handleGesture}
                />
              )}
            </div>
          </div>

          <div className={`lg:w-80 lg:shrink-0 ${styles.fadeUp}`} style={{ animationDelay: "0.16s" }}>
            <div
              className="w-full overflow-hidden rounded-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <span
                  className="font-mono tracking-widest"
                  style={{ color: "var(--text-muted)", fontSize: "11px" }}
                >
                  GESTURE LIST
                </span>
                {hands.length > 0 && (
                  <div className="flex items-center gap-2">
                    {hands.map((_, i) => (
                      <span
                        key={i}
                        className="rounded px-1.5 py-0.5 font-mono"
                        style={{
                          fontSize: "10px",
                          background: HAND_COLORS[i % HAND_COLORS.length].dim,
                          color: HAND_COLORS[i % HAND_COLORS.length].color,
                          border: `1px solid color-mix(in srgb, ${HAND_COLORS[i % HAND_COLORS.length].color} 35%, transparent)`,
                        }}
                      >
                        HAND {HAND_COLORS[i % HAND_COLORS.length].label}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2 p-5">
                {Object.entries(LABEL_NAME).map(([labelStr, name]) => {
                  const matchingHands = hands
                    .map((h, i) => ({ ...h, handIndex: i }))
                    .filter((h) => h.name === name);
                  const isActive = matchingHands.length > 0;
                  const isBad = name === "beobgyu";
                  const hasBeobgyu = matchingHands.some((h) => h.isBeobgyu);

                  return (
                    <div
                      key={labelStr}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 transition-all"
                      style={{
                        background: isActive
                          ? hasBeobgyu
                            ? "var(--accent-red-dim)"
                            : `color-mix(in srgb, ${HAND_COLORS[matchingHands[0].handIndex % HAND_COLORS.length].color} 10%, transparent)`
                          : "var(--bg-secondary)",
                        border: `1px solid ${
                          isActive
                            ? hasBeobgyu
                              ? "var(--accent-red)"
                              : HAND_COLORS[matchingHands[0].handIndex % HAND_COLORS.length].color
                            : "var(--border-subtle)"
                        }`,
                      }}
                    >
                      <span
                        className="w-5 text-center font-mono"
                        style={{ color: "var(--text-muted)", fontSize: "11px" }}
                      >
                        {labelStr}
                      </span>
                      <span
                        className="flex-1 font-mono"
                        style={{
                          color: isActive
                            ? hasBeobgyu
                              ? "var(--accent-red)"
                              : HAND_COLORS[matchingHands[0].handIndex % HAND_COLORS.length].color
                            : "var(--text-secondary)",
                          fontSize: "13px",
                        }}
                      >
                        {name.toUpperCase()}
                      </span>
                      {isBad && (
                        <span
                          className="rounded-md px-2 py-0.5 font-mono"
                          style={{
                            background: "var(--accent-red-dim)",
                            color: "var(--accent-red)",
                            fontSize: "10px",
                            border: "1px solid color-mix(in srgb, var(--accent-red) 35%, transparent)",
                          }}
                        >
                          MOSAIC
                        </span>
                      )}
                      {isActive && (
                        <div className="flex items-center gap-1">
                          {matchingHands.map((h) => (
                            <div
                              key={h.handIndex}
                              className={`h-2 w-2 rounded-full ${styles.pulseDot}`}
                              style={{
                                background: h.isBeobgyu
                                  ? "var(--accent-red)"
                                  : HAND_COLORS[h.handIndex % HAND_COLORS.length].color,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div
                className="px-5 pb-5"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <p
                  className="pt-4 leading-relaxed"
                  style={{ color: "var(--text-muted)", fontSize: "12px" }}
                >
                  KNN(k=3) 기반 손 제스처 분류. 21개 관절에서 15개 각도를 추출해 10가지 제스처를
                  인식하며, 특정 제스처(beobgyu) 감지 시 자동 모자이크 처리합니다. 카메라 또는
                  사진·영상 업로드로 테스트할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
