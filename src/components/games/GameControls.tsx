import type { GameControl } from "@/types/game";
import styles from "./games.module.css";

export function GameControls({ controls }: { controls: GameControl[] }) {
  return <section><h2>조작 안내</h2><dl className={styles.controls}>
    {controls.map(control => <div key={control.key}><dt><kbd>{control.key}</kbd></dt><dd>{control.action}</dd></div>)}
  </dl></section>;
}
