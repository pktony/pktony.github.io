import type { Game } from "@/types/game";
import type { UnityState } from "@/lib/unity/UnityFrameSession";
import styles from "./games.module.css";

type Props = { game: Game; state: UnityState | null; desktop: boolean; onStart: () => void };

export function UnityPlayerOverlay({ game, state, desktop, onStart }: Props) {
  if (state?.phase === "running") return null;
  return <div className={`${styles.overlay} ${state ? styles.opaqueOverlay : ""}`}><div>
    {state?.phase === "loading" ? <>
      <h2>{state.progress >= .9 ? "시작 중" : "불러오는 중"}</h2>
      <progress className={styles.progress} value={state.progress} max={1} aria-label="게임 파일 다운로드" />
    </> : state?.phase === "error" ? <>
      <h2>불러오지 못했습니다</h2>
      <div className={styles.errorActions}><button className={`${styles.button} ${styles.playerPrimary}`} onClick={onStart}>다시 시도</button>
        {game.video && <a className={styles.playerAlt} href={game.video} target="_blank" rel="noopener noreferrer">시연 영상 보기</a>}
        <a className={styles.playerAlt} href={game.build!.url} target="_blank" rel="noopener noreferrer">새 창에서 실행</a></div>
    </> : desktop ? <>
      <button className={`${styles.button} ${styles.playerPrimary}`} onClick={onStart}>플레이</button>
    </> : <>
      <h2>데스크톱 전용</h2>
      {game.video && <a className={`${styles.button} ${styles.playerPrimary}`} href={game.video} target="_blank" rel="noopener noreferrer">시연 영상 보기</a>}
    </>}
  </div></div>;
}
