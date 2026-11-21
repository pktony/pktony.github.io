import type { Metadata } from "next";
import { PlaygroundCard } from "@/components/playground/PlaygroundCard";
import { PlaygroundHeader } from "@/components/playground/PlaygroundHeader";
import { playgroundItems } from "@/data/playground";
import styles from "@/components/games/games.module.css";
import playgroundStyles from "@/components/playground/playground.module.css";

export const metadata: Metadata = {
  title: "Playground | 박상원",
  description: "브라우저에서 직접 실행해보는 컴퓨터 비전 필터(Golden Ratio · Beobgyu Filter)와 Unity WebGL 인터랙션 데모.",
};

export default function PlaygroundPage() {
  const visionItems = playgroundItems.filter((item) => item.group === "vision");
  const unityItems = playgroundItems.filter((item) => item.group === "unity");

  return (
    <>
      <PlaygroundHeader isGallery />
      <div className={styles.galleryPage}>
        <section className={styles.intro}>
          <h1>Playground</h1>
          <p className={playgroundStyles.introSub}>
            MediaPipe 기반 실시간 컴퓨터 비전 실험과 Unity WebGL 인터랙션 시스템을 브라우저에서 직접 실행해볼 수 있습니다.
          </p>
        </section>

        <section aria-labelledby="vision-title" className={playgroundStyles.sectionBlock}>
          <div className={styles.sectionHead}>
            <h2 id="vision-title">Computer Vision</h2>
            <span>{visionItems.length}개 · MediaPipe</span>
          </div>
          <div className={playgroundStyles.galleryTwo}>
            {visionItems.map((item) => (
              <PlaygroundCard key={item.slug} item={item} />
            ))}
          </div>
        </section>

        <section aria-labelledby="unity-title" className={playgroundStyles.sectionBlock}>
          <div className={styles.sectionHead}>
            <h2 id="unity-title">Unity 인터랙션</h2>
            <span>{unityItems.length}개 · WebGL</span>
          </div>
          <div className={playgroundStyles.galleryTwo}>
            {unityItems.map((item) => (
              <PlaygroundCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
