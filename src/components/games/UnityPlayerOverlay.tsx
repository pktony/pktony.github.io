import type { Game } from "@/types/game";
import type { UnityState } from "@/lib/unity/UnityFrameSession";
import styles from "./games.module.css";

type Props = { game: Game; state: UnityState | null; desktop: boolean; onStart: () => void };

export function UnityPlayerOverlay({ game, state, desktop, onStart }: Props) {
  if (state?.phase === "running") return null;
  return <div className={styles.overlay}><div>
    {state?.phase === "loading" ? <>
      <h2>데모를 불러오는 중입니다</h2><p>첫 실행에는 시간이 걸릴 수 있습니다.</p>
      <progress className={styles.progress} value={state.progress} max={1} aria-label="게임 파일 다운로드" />
      <p>{state.progress >= .9 ? "파일 준비 후 Unity를 시작하고 있습니다." : "게임 파일 다운로드 중"}</p>
    </> : state?.phase === "error" ? <>
      <h2>데모를 불러오지 못했어요</h2><p>다시 시도하거나 시연 영상을 확인해 주세요.</p>
      <div className={styles.errorActions}><button className={`${styles.button} ${styles.playerPrimary}`} onClick={onStart}>다시 시도</button>
        {game.video && <a className={styles.playerAlt} href={game.video} target="_blank" rel="noopener noreferrer">시연 영상 보기</a>}
        <a className={styles.playerAlt} href={game.build!.url} target="_blank" rel="noopener noreferrer">새 창에서 실행</a></div>
    </> : desktop ? <>
      <h2>가방을 열고, 아이템을 옮겨 보세요</h2><p>시작 버튼을 누르면 플레이어를 불러옵니다.</p>
      <button className={`${styles.button} ${styles.playerPrimary}`} onClick={onStart}>데모 시작</button>
      <p className={styles.downloadHint}>첫 다운로드 약 {Math.ceil(game.build!.downloadBytes / 1024 / 1024)} MB · 효과음 없음</p>
    </> : <>
      <h2>데스크톱에서 체험하세요</h2><p>마우스와 키보드가 필요한 데모입니다.<br />지금은 영상으로 살펴볼 수 있어요.</p>
      {game.video && <a className={`${styles.button} ${styles.playerPrimary}`} href={game.video} target="_blank" rel="noopener noreferrer">시연 영상 보기</a>}
    </>}
  </div></div>;
}
