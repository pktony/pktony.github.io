import Image from "next/image";
import type { Game } from "@/types/game";
import styles from "./games.module.css";
import { GameToolbar } from "./GameToolbar";

export function GamePreview({ game }: { game: Game }) {
  return <section className={styles.workspace} aria-label={`${game.name} 미리보기`}>
    <GameToolbar game={game} />
    <div className={styles.player}>
      <Image src={game.image.src} alt={game.image.alt} fill sizes="100vw" className={styles.previewImage} priority />
      <div className={styles.overlay}><div><h2>{game.status}</h2>
        {game.video && <a className={`${styles.button} ${styles.playerPrimary}`} href={game.video} target="_blank" rel="noopener noreferrer">시연 영상 보기</a>}
      </div></div>
    </div>
  </section>;
}
