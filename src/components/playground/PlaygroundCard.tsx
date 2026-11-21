import Image from "next/image";
import { IconBase } from "@/components/icons/IconBase";
import type { PlaygroundItem } from "@/data/playground";
import styles from "@/components/games/games.module.css";
import playgroundStyles from "./playground.module.css";

export function PlaygroundCard({ item }: { item: PlaygroundItem }) {
  return (
    <a
      id={`playground-${item.slug}`}
      className={styles.card}
      href={item.href}
      aria-label={`${item.name} 열기`}
    >
      <div className={`${styles.art} ${item.image.contain ? styles.contain : ""}`}>
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          sizes="(max-width: 720px) 100vw, 50vw"
        />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardType}>{item.category}</span>
        <h3 className={playgroundStyles.cardTitleTight}>{item.name}</h3>
        <p className={playgroundStyles.cardSummary}>{item.summary}</p>
        <div className={styles.cardBottom}>
          <span className={`${styles.status} ${styles.accentStatus}`}>{item.status}</span>
          <span className={styles.cardAction}>
            실행하기
            <IconBase>
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </IconBase>
          </span>
        </div>
      </div>
    </a>
  );
}
