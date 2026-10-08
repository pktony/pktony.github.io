import type { Metadata } from "next";
import "./globals.css";
import { resume } from "@/resume.config";

export const metadata: Metadata = {
  title: `${resume.name} | Portfolio`,
  description: resume.title,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
