import type { ReactNode } from "react";
import { IconBase } from "@/components/icons/IconBase";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { PlayIcon } from "@/components/icons/PlayIcon";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import type { Game } from "@/types/game";
import styles from "./games.module.css";

export function GameToolbar({ game, actions }: { game: Game; actions?: ReactNode }) {
  return <header className={styles.gameToolbar}>
    <a href={`/games/#game-${game.slug}`} className={styles.iconButton} aria-label="게임 갤러리로" title="게임 갤러리로"><IconBase><path d="M19 12H5m6-6-6 6 6 6" /></IconBase></a>
    <h1>{game.name}</h1>
    <nav aria-label="게임 도구" className={styles.gameTools}>
      {game.video && <a className={styles.iconButton} href={game.video} target="_blank" rel="noopener noreferrer" aria-label="시연 영상" title="시연 영상"><PlayIcon /></a>}
      {game.source && <a className={styles.iconButton} href={game.source} target="_blank" rel="noopener noreferrer" aria-label="소스 코드" title="소스 코드"><GithubIcon /></a>}
      {game.build && <a className={styles.iconButton} href={game.build.url} target="_blank" rel="noopener noreferrer" aria-label="새 창에서 실행" title="새 창에서 실행"><ExternalLinkIcon /></a>}
      <ThemeToggle />
      {actions}
    </nav>
  </header>;
}
