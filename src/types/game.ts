export type GameControl = { key: string; action: string };

export type GameBuild = {
  id: string;
  url: string;
  channel: string;
  downloadBytes: number;
};

export type Game = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  status: string;
  image: { src: string; alt: string; width: number; height: number; concept?: boolean };
  tags: string[];
  controls?: GameControl[];
  video?: string;
  source?: string;
  build?: GameBuild;
};
