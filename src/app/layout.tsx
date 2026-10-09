import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: `${profile.name} · ${profile.title}. Unity 클라이언트부터 백엔드·배포·운영까지.`,
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description: profile.title,
    type: "website",
    locale: "ko_KR",
  },
};

const PRETENDARD =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";
const JETBRAINS_MONO = "https://cdn.jsdelivr.net/npm/@fontsource-variable/jetbrains-mono@5.1.1/index.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href={PRETENDARD} />
        <link rel="stylesheet" href={JETBRAINS_MONO} />
      </head>
      <body>{children}</body>
    </html>
  );
}
