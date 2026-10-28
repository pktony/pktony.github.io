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
  status: string;
  image: { src: string; alt: string; width: number; height: number; concept?: boolean };
  video?: string;
  source?: string;
  build?: GameBuild;
};
