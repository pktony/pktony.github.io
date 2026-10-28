import Image from "next/image";
import type { Game } from "@/types/game";
import styles from "./games.module.css";

export function GamePreview({ game }: { game: Game }) {
  return <section aria-label={`${game.name} 미리보기`}>
    <div className={styles.player}>
      <Image src={game.image.src} alt={game.image.alt} fill sizes="(max-width: 850px) 100vw, 75vw" className={styles.previewImage} priority />
      <div className={styles.overlay}><div><h2>공개 데모 준비 중</h2><p>{game.status}인 프로젝트입니다.</p>
        {game.video && <a className={`${styles.button} ${styles.playerPrimary}`} href={game.video} target="_blank" rel="noopener noreferrer">시연 영상 보기</a>}
      </div></div>
    </div>
  </section>;
}
