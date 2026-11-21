import type { Metadata } from "next";
import { PlaygroundHeader } from "@/components/playground/PlaygroundHeader";
import { BeobgyuFilterLab } from "@/components/playground/vision/BeobgyuFilterLab";

export const metadata: Metadata = {
  title: "Beobgyu Filter · 손 제스처 필터 | 박상원",
  description: "MediaPipe Hand Landmarker와 KNN(k=3)으로 10가지 손 제스처를 실시간 분류하고 모자이크 처리하는 필터.",
};

export default function BeobgyuFilterPage() {
  return (
    <>
      <PlaygroundHeader backHref="/playground/" backLabel="Playground로 돌아가기" />
      <BeobgyuFilterLab />
    </>
  );
}
