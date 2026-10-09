import type { Metadata } from "next";
import "./globals.css";
import { resume } from "@/resume.config";

export const metadata: Metadata = {
  title: `${resume.name} | Portfolio`,
  description: `${resume.name} · ${resume.title}. Unity 클라이언트부터 백엔드·배포·운영까지.`,
  openGraph: {
    title: `${resume.name} | Portfolio`,
    description: resume.title,
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
