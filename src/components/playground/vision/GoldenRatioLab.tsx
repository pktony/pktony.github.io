"use client";

import { useState, useCallback } from "react";
import { TOLERANCE_EYE, TOLERANCE_NOSE_CHIN } from "@/lib/vision/config";
import type { ControlValues } from "@/lib/vision/types";
import { ControlPanel } from "./ControlPanel";
import { GoldenRatioDetector } from "./GoldenRatioDetector";
import { VideoCard } from "./VideoCard";
import styles from "./vision.module.css";

export function GoldenRatioLab() {
  const [controls, setControls] = useState<ControlValues>({
    tolEye: TOLERANCE_EYE,
    tolNoseChin: TOLERANCE_NOSE_CHIN,
    showMesh: false,
    showLines: false,
    showIndices: false,
    showBbox: true,
    showMosaic: true,
  });

  const [totalFaces, setTotalFaces] = useState(0);
  const [goldenFaces, setGoldenFaces] = useState(0);

  const handleStats = useCallback((total: number, golden: number) => {
    setTotalFaces(total);
    setGoldenFaces(golden);
  }, []);

  return (
    <div className={styles.visionRoot}>
      <div className={styles.visionContainer}>
        <div className={`mb-6 ${styles.fadeUp}`}>
          <div className="mb-2 flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg font-mono font-bold"
              style={{
                background: "var(--accent-cyan-dim)",
                color: "var(--accent-cyan)",
                border: "1px solid var(--accent-cyan)",
                fontSize: "12px",
              }}
            >
              PHI
            </div>
            <div>
              <h1 className="text-title font-bold tracking-wide" style={{ color: "var(--text-primary)" }}>
                GOLDEN RATIO
              </h1>
              <p className="text-meta" style={{ color: "var(--accent-cyan)" }}>
                황금비율 필터 · MediaPipe Face Landmarker
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <VideoCard
            stats={
              <>
                <span className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "12px" }}>
                  FACES: <span style={{ color: "var(--text-primary)" }}>{totalFaces}</span>
                </span>
                <span className="font-mono" style={{ color: "var(--text-secondary)", fontSize: "12px" }}>
                  GOLDEN: <span style={{ color: "var(--accent-green)" }}>{goldenFaces}</span>
                </span>
              </>
            }
          >
            <GoldenRatioDetector controls={controls} onStats={handleStats} />
          </VideoCard>

          <div className={`lg:w-80 lg:shrink-0 ${styles.fadeUp}`} style={{ animationDelay: "0.16s" }}>
            <ControlPanel controls={controls} onChange={setControls} />
          </div>
        </div>
      </div>
    </div>
  );
}
