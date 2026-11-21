"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";
import { loadTrainingData, detectGesture } from "@/lib/vision/gestureDetect";
import { drawHandLandmarks, drawHandBbox, applyHandMosaic } from "@/lib/vision/drawHand";
import {
  mirrorLandmarks,
  MEDIAPIPE_WASM_URL,
  HAND_LANDMARKER_MODEL_URL,
} from "@/lib/vision/canvasUtils";
import { GESTURE_MAP } from "@/lib/vision/gestureConfig";
import type { NormalizedLandmark, HandGestureInfo, InputSource } from "@/lib/vision/types";

interface Props {
  source: InputSource;
  onGesture: (hands: HandGestureInfo[]) => void;
}

export function BeobgyuDetector({ source, onGesture }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const landmarkerRef = useRef<HandLandmarker | null>(null);
  const animFrameRef = useRef<number>(0);
  const cancelledRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const onGestureRef = useRef(onGesture);
  onGestureRef.current = onGesture;

  const lastGestureRef = useRef(0);
  const sourceRef = useRef(source);
  sourceRef.current = source;

  const createLandmarker = useCallback(async (mode: "IMAGE" | "VIDEO") => {
    const filesetResolver = await FilesetResolver.forVisionTasks(MEDIAPIPE_WASM_URL);
    return HandLandmarker.createFromOptions(filesetResolver, {
      baseOptions: {
        modelAssetPath: HAND_LANDMARKER_MODEL_URL,
        delegate: "GPU",
      },
      runningMode: mode,
      numHands: 2,
      minHandDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
  }, []);

  const processResults = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      landmarks: NormalizedLandmark[][],
      frameW: number,
      frameH: number,
      shouldMirror: boolean,
    ) => {
      const hands: HandGestureInfo[] = [];
      for (const handLandmarks of landmarks) {
        const lm = shouldMirror ? mirrorLandmarks(handLandmarks) : handLandmarks;

        const gesture = detectGesture(lm, frameW, frameH);
        const isBeobgyu = gesture.label === GESTURE_MAP["beobgyu"];

        if (isBeobgyu) {
          applyHandMosaic(ctx, gesture.bbox);
        } else {
          drawHandLandmarks(ctx, lm, frameW, frameH);
        }

        drawHandBbox(ctx, gesture.bbox, gesture.name, isBeobgyu);
        hands.push({ name: gesture.name, isBeobgyu });
      }
      return hands;
    },
    [],
  );

  const detectLoop = useCallback(() => {
    if (cancelledRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const landmarker = landmarkerRef.current;

    if (!video || !canvas || !landmarker || video.readyState < 2) {
      animFrameRef.current = requestAnimationFrame(detectLoop);
      return;
    }

    if (sourceRef.current.type === "video" && video.ended) {
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isCamera = sourceRef.current.type === "camera";

    if (isCamera) {
      ctx.save();
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(video, 0, 0);
      ctx.restore();
    } else {
      ctx.drawImage(video, 0, 0);
    }

    const result = landmarker.detectForVideo(video, performance.now());

    let hands: HandGestureInfo[] = [];
    if (result.landmarks) {
      hands = processResults(
        ctx,
        result.landmarks as NormalizedLandmark[][],
        canvas.width,
        canvas.height,
        isCamera,
      );
    }

    const now = performance.now();
    if (now - lastGestureRef.current > 200) {
      lastGestureRef.current = now;
      onGestureRef.current(hands);
    }

    animFrameRef.current = requestAnimationFrame(detectLoop);
  }, [processResults]);

  const processImage = useCallback(
    async (url: string) => {
      const canvas = canvasRef.current;
      const landmarker = landmarkerRef.current;
      if (!canvas || !landmarker) return;

      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("이미지 로드 실패"));
        img.src = url;
      });

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);

      const result = landmarker.detect(img);

      let hands: HandGestureInfo[] = [];
      if (result.landmarks) {
        hands = processResults(
          ctx,
          result.landmarks as NormalizedLandmark[][],
          canvas.width,
          canvas.height,
          false,
        );
      }

      onGestureRef.current(hands);
    },
    [processResults],
  );

  useEffect(() => {
    cancelledRef.current = false;
    setLoading(true);
    setError(null);

    let localStream: MediaStream | null = null;

    (async () => {
      try {
        await loadTrainingData();
        if (cancelledRef.current) return;

        if (source.type === "image") {
          const landmarker = await createLandmarker("IMAGE");
          if (cancelledRef.current) {
            landmarker.close();
            return;
          }
          landmarkerRef.current = landmarker;
          setLoading(false);
          await processImage(source.url);
        } else {
          const landmarker = await createLandmarker("VIDEO");
          if (cancelledRef.current) {
            landmarker.close();
            return;
          }
          landmarkerRef.current = landmarker;

          const video = videoRef.current;
          if (!video) return;

          if (source.type === "camera") {
            const stream = await navigator.mediaDevices.getUserMedia({
              video: { facingMode: "user", width: 1280, height: 720 },
            });
            if (cancelledRef.current) {
              stream.getTracks().forEach((t) => t.stop());
              return;
            }
            localStream = stream;
            video.srcObject = stream;
            video.muted = true;
            video.playsInline = true;
            await video.play();
          } else {
            video.src = source.url;
            video.muted = true;
            video.playsInline = true;
            video.loop = true;
            await video.play();
          }

          if (cancelledRef.current) return;
          setLoading(false);
          animFrameRef.current = requestAnimationFrame(detectLoop);
        }
      } catch (err) {
        if (!cancelledRef.current) {
          setError(err instanceof Error ? err.message : "초기화 실패");
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelledRef.current = true;
      cancelAnimationFrame(animFrameRef.current);
      landmarkerRef.current?.close();
      landmarkerRef.current = null;

      const video = videoRef.current;
      if (video) {
        if (video.srcObject) {
          (video.srcObject as MediaStream).getTracks().forEach((t) => t.stop());
          video.srcObject = null;
        }
        video.src = "";
      }

      if (localStream) {
        localStream.getTracks().forEach((t) => t.stop());
      }
    };
  }, [source, createLandmarker, detectLoop, processImage]);

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
                borderTopColor: "var(--accent-amber)",
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
              {source.type === "camera" ? "CAMERA UNAVAILABLE" : "ERROR"}
            </span>
            <p className="text-meta" style={{ color: "var(--text-secondary)" }}>
              {source.type === "camera"
                ? `웹캠이 없거나 권한이 거부되었습니다. 위의 UPLOAD 탭으로 전환하면 사진이나 영상으로 테스트할 수 있습니다. (${error})`
                : error}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
