import type { Metadata } from "next";
import { PlaygroundHeader } from "@/components/playground/PlaygroundHeader";
import { GoldenRatioLab } from "@/components/playground/vision/GoldenRatioLab";

export const metadata: Metadata = {
  title: "Golden Ratio · 황금비율 필터 | 박상원",
  description: "MediaPipe Face Landmarker로 눈 5등분과 코-입-턱 황금비율을 실시간 분석하는 웹캠 필터.",
};

export default function GoldenRatioPage() {
  return (
    <>
      <PlaygroundHeader backHref="/playground/" backLabel="Playground로 돌아가기" />
      <GoldenRatioLab />
    </>
  );
}
