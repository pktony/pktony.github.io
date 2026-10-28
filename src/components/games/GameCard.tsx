import Image from "next/image";
import { IconBase } from "@/components/icons/IconBase";
import type { Game } from "@/types/game";
import styles from "./games.module.css";

export function GameCard({ game }: { game: Game }) {
  return (
    <a id={`game-${game.slug}`} className={styles.card} href={`/games/${game.slug}/`} aria-label={`${game.name} 프로젝트 보기`}>
      <div className={`${styles.art} ${game.slug === "modular-grid-inventory" ? styles.contain : ""} ${game.image.concept ? styles.conceptArt : ""}`}>
        <Image src={game.image.src} alt={game.image.alt} width={game.image.width} height={game.image.height} sizes="(max-width: 600px) 100vw, (max-width: 850px) 50vw, 33vw" />
        {game.image.concept && <span className={styles.concept}>콘셉트 썸네일</span>}
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardType}>Unity · {game.category}</span>
        <h3>{game.name}</h3>
        <div className={styles.cardBottom}>
          <span className={`${styles.status} ${game.build ? styles.accentStatus : ""}`}>{game.status}</span>
          <span className={styles.cardAction}>프로젝트 보기 <IconBase><path d="M5 12h14m-6-6 6 6-6 6" /></IconBase></span>
        </div>
      </div>
    </a>
  );
}
