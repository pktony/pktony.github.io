import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import type { Game } from "@/types/game";
import styles from "./games.module.css";

export function GameResources({ game }: { game: Game }) {
  if (!game.video && !game.source) return null;
  return <section className={styles.resources}><h2>관련 자료</h2><p>실제 동작과 구현을 살펴보세요.</p><div className={styles.resourceLinks}>
    {game.video && <a className={styles.button} href={game.video} target="_blank" rel="noopener noreferrer">시연 영상 보기 <ExternalLinkIcon /></a>}
    {game.source && <a className={styles.button} href={game.source} target="_blank" rel="noopener noreferrer">소스 코드 <ExternalLinkIcon /></a>}
  </div></section>;
}
