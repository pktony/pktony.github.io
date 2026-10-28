import { IconBase } from "@/components/icons/IconBase";
import type { Game } from "@/types/game";
import { GameControls } from "./GameControls";
import { GamePreview } from "./GamePreview";
import { GameResources } from "./GameResources";
import styles from "./games.module.css";

export function GameDetail({ game }: { game: Game }) {
  return <>
    <a href={`/games/#game-${game.slug}`} className={styles.back}><IconBase><path d="M19 12H5m6-6-6 6 6 6" /></IconBase>게임 갤러리로</a>
    <section className={styles.detailHeading}>
      <div><span className={`${styles.status} ${game.build ? styles.accentStatus : ""}`}>{game.status}</span><h1>{game.name}</h1><p>{game.summary}</p></div>
      {game.controls && <span className={styles.platform}>데스크톱 · 마우스와 키보드</span>}
    </section>
    <div className={styles.playLayout}>
      <GamePreview game={game} />
      <aside className={styles.rail} aria-label="조작과 자료">
        {game.controls ? <GameControls controls={game.controls} /> : <section><h2>공개 준비 중</h2><p>현재 {game.status}입니다. 웹 데모는 준비 후 연결합니다.</p></section>}
        <GameResources game={game} />
      </aside>
    </div>
    <section className={styles.about}><h2>이 프로젝트에서 만든 것</h2><p>{game.description}</p><ul className={styles.tags} aria-label="구현 특징">{game.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></section>
  </>;
}
