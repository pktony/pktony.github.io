import { ThemeToggle } from "@/components/theme/ThemeToggle";
import styles from "./games.module.css";

export function GamesHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="/" aria-label="박상원 포트폴리오 홈">박상원<span>.</span></a>
      <nav aria-label="주 메뉴">
        <a href="/">포트폴리오</a>
        <a href="/games/" aria-current="page">게임 갤러리</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
