import { GamesHeader } from "@/components/games/GamesHeader";
import { GameRouteFocus } from "@/components/games/GameRouteFocus";
import { ThemeInitScript } from "@/components/theme/ThemeInitScript";
import { SkipLink } from "@/components/ui/SkipLink";
import styles from "@/components/games/games.module.css";

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return <>
    <ThemeInitScript />
    <GameRouteFocus />
    <SkipLink href="#main">본문으로 건너뛰기</SkipLink>
    <GamesHeader />
    <main id="main" tabIndex={-1} className={styles.shell}>{children}</main>
    <footer className={styles.footer}>박상원 · Unity 게임과 시스템 개발</footer>
  </>;
}
