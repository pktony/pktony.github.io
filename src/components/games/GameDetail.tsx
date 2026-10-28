import type { Game } from "@/types/game";
import { GamePreview } from "./GamePreview";
import { UnityPlayer } from "./UnityPlayer";

export function GameDetail({ game }: { game: Game }) {
  return game.build ? <UnityPlayer game={game} /> : <GamePreview game={game} />;
}
