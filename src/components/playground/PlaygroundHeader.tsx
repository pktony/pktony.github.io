import { IconBase } from "@/components/icons/IconBase";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import styles from "@/components/games/games.module.css";

type PlaygroundHeaderProps = {
  isGallery?: boolean;
  backHref?: string;
  backLabel?: string;
};

export function PlaygroundHeader({ isGallery = false, backHref, backLabel }: PlaygroundHeaderProps) {
  return (
    <header className={styles.header}>
      <div className="flex items-center gap-3">
        {backHref && (
          <a
            href={backHref}
            className={styles.iconButton}
            aria-label={backLabel ?? "Playground로 돌아가기"}
            title={backLabel ?? "Playground로 돌아가기"}
          >
            <IconBase>
              <path d="M19 12H5m6-6-6 6 6 6" />
            </IconBase>
          </a>
        )}
        <a className={styles.brand} href="/" aria-label="박상원 포트폴리오 홈">
          박상원<span>.</span>
        </a>
      </div>
      <nav aria-label="주 메뉴">
        <a href="/">포트폴리오</a>
        <a href="/playground/" aria-current={isGallery ? "page" : undefined}>
          Playground
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
