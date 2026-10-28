import { GameRouteFocus } from "@/components/games/GameRouteFocus";
import { ThemeInitScript } from "@/components/theme/ThemeInitScript";
import { SkipLink } from "@/components/ui/SkipLink";
import styles from "@/components/games/games.module.css";

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return <>
    <ThemeInitScript />
    <GameRouteFocus />
    <SkipLink href="#main">본문으로 건너뛰기</SkipLink>
    <main id="main" tabIndex={-1} className={styles.main}>{children}</main>
  </>;
}
