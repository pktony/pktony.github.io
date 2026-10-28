import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameDetail } from "@/components/games/GameDetail";
import { games } from "@/data/games";

export const dynamicParams = false;
export function generateStaticParams() { return games.map(game => ({ slug: game.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = games.find(entry => entry.slug === slug);
  return { title: game ? `${game.name} | 박상원` : "프로젝트를 찾을 수 없습니다", description: game?.summary };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = games.find(entry => entry.slug === slug);
  if (!game) notFound();
  return <GameDetail game={game} />;
}
