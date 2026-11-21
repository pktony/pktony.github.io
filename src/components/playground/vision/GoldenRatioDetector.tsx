"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { isGoldenRatio } from "@/lib/vision/goldenRatio";
import {
  drawMesh,
  drawLandmarkIndices,
  drawEyeRatioLines,
  drawNoseChinLines,
  drawBbox,
  applyMosaic,
} from "@/lib/vision/draw";
import {
  mirrorLandmarks,
  MEDIAPIPE_WASM_URL,
  FACE_LANDMARKER_MODEL_URL,
} from "@/lib/vision/canvasUtils";
import type { ControlValues, NormalizedLandmark } from "@/lib/vision/types";

interface Props {
  controls: ControlValues;
  onStats: (total: number, golden: number) => void;
}

export function GoldenRatioDetector({ controls, onStats }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const landmarkerRef = useRef<FaceLandmarker | null>(null);
  const animFrameRef = useRef<number>(0);
  const cancelledRef = useRef(false);
  const controlsRef = useRef(controls);
  controlsRef.current = controls;

  const onStatsRef = useRef(onStats);
  onStatsRef.current = onStats;

  const lastStatsRef = useRef(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const initLandmarker = useCallback(async () => {
    const filesetResolver = await FilesetResolver.forVisionTasks(MEDIAPIPE_WASM_URL);
    const landmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
      baseOptions: {
        modelAssetPath: FACE_LANDMARKER_MODEL_URL,
        delegate: "GPU",
      },
      runningMode: "VIDEO",
      numFaces: 10,
      minFaceDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    landmarkerRef.current = landmarker;
  }, []);

  const startCamera = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: 1280, height: 720 },
    });
    video.srcObject = stream;
    await video.play();
  }, []);

  const detect = useCallback(() => {
    if (cancelledRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const landmarker = landmarkerRef.current;

    if (!video || !canvas || !landmarker || video.readyState < 2) {
      animFrameRef.current = requestAnimationFrame(detect);
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0);
    ctx.restore();

    const frameW = canvas.width;
    const frameH = canvas.height;
    const ctrl = controlsRef.current;

    const result = landmarker.detectForVideo(video, performance.now());

    let goldenCount = 0;
    const total = result.faceLandmarks?.length ?? 0;

    if (result.faceLandmarks) {
      for (const faceLms of result.faceLandmarks) {
        const landmarks = faceLms as NormalizedLandmark[];
        const mirrored = mirrorLandmarks(landmarks);

        const { isGolden, ratios } = isGoldenRatio(
          mirrored,
          frameW,
          frameH,
          ctrl.tolEye,
          ctrl.tolNoseChin,
        );

        if (ctrl.showMosaic && !isGolden) {
          applyMosaic(ctx, mirrored, frameW, frameH);
        }
        if (ctrl.showMesh) {
          drawMesh(ctx, mirrored, frameW, frameH);
        }
        if (ctrl.showIndices) {
          drawLandmarkIndices(ctx, mirrored, frameW, frameH);
        }
        if (ctrl.showLines) {
          drawEyeRatioLines(ctx, mirrored, frameW, frameH, ratios);
          drawNoseChinLines(ctx, mirrored, frameW, frameH, ratios);
        }
        if (ctrl.showBbox) {
          drawBbox(ctx, mirrored, frameW, frameH, isGolden);
        }
        if (isGolden) goldenCount++;
      }
    }

    const now = performance.now();
    if (now - lastStatsRef.current > 200) {
      lastStatsRef.current = now;
      onStatsRef.current(total, goldenCount);
    }

    animFrameRef.current = requestAnimationFrame(detect);
  }, []);

  useEffect(() => {
    cancelledRef.current = false;

    (async () => {
      try {
        await initLandmarker();
        if (cancelledRef.current) return;
        await startCamera();
        if (cancelledRef.current) return;
        setLoading(false);
        animFrameRef.current = requestAnimationFrame(detect);
      } catch (err) {
        if (!cancelledRef.current) {
          setError(err instanceof Error ? err.message : "카메라 초기화에 실패했습니다");
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelledRef.current = true;
      cancelAnimationFrame(animFrameRef.current);
      landmarkerRef.current?.close();
      const video = videoRef.current;
      if (video?.srcObject) {
        (video.srcObject as MediaStream).getTracks().forEach((t) => t.stop());
      }
    };
  }, [initLandmarker, startCamera, detect]);

  return (
    <div className="relative w-full" style={{ minHeight: "340px" }}>
      <video ref={videoRef} className="hidden" playsInline muted />
      <canvas
        ref={canvasRef}
        className="block w-full"
        style={{ background: "var(--bg-primary)", minHeight: "340px", maxHeight: "60vh" }}
      />
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(8, 9, 12, 0.9)" }}
        >
          <div className="text-center">
            <div
              className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2"
              style={{
                borderColor: "var(--border-subtle)",
                borderTopColor: "var(--accent-cyan)",
              }}
            />
            <span
              className="font-mono tracking-widest"
              style={{ color: "var(--text-muted)", fontSize: "12px" }}
            >
              LOADING MODEL...
            </span>
          </div>
        </div>
      )}
      {error && (
        <div
          className="absolute inset-0 flex items-center justify-center px-6"
          style={{ background: "rgba(8, 9, 12, 0.92)" }}
        >
          <div className="max-w-md text-center">
            <span
              className="mb-2 block font-mono tracking-widest"
              style={{ color: "var(--accent-red)", fontSize: "12px" }}
            >
              CAMERA UNAVAILABLE
            </span>
            <p className="text-meta" style={{ color: "var(--text-secondary)" }}>
              웹캠 연결 또는 카메라 권한이 필요합니다 ({error})
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
