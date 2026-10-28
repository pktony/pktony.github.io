import type { Metadata } from "next";
import { GameCard } from "@/components/games/GameCard";
import { GamesHeader } from "@/components/games/GamesHeader";
import { games } from "@/data/games";
import styles from "@/components/games/games.module.css";

export const metadata: Metadata = { title: "게임과 인터랙션 | 박상원", description: "박상원의 Unity 게임과 인터랙티브 시스템. 프로젝트 화면과 브라우저 데모를 살펴보세요." };

export default function GamesPage() {
  return <>
    <GamesHeader />
    <div className={styles.galleryPage}>
    <section className={styles.intro}><h1>게임과 인터랙션</h1></section>
    <section aria-labelledby="projects-title"><div className={styles.sectionHead}><h2 id="projects-title">프로젝트</h2><span>{games.length}개 · Unity</span></div><div className={styles.gallery}>{games.map(game => <GameCard game={game} key={game.slug} />)}</div></section>
    </div>
  </>;
}
