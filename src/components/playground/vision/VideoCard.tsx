import type { ReactNode } from "react";
import styles from "./vision.module.css";

interface Props {
  stats: ReactNode;
  children: ReactNode;
}

export function VideoCard({ stats, children }: Props) {
  return (
    <div className={`flex-1 ${styles.fadeUp}`} style={{ animationDelay: "0.08s" }}>
      <div
        className="overflow-hidden rounded-2xl"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{ borderBottom: "1px solid var(--border-subtle)" }}
        >
          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${styles.pulseDot}`}
              style={{ background: "var(--accent-red)" }}
            />
            <span
              className="font-mono text-caption"
              style={{ color: "var(--text-muted)", fontSize: "11px" }}
            >
              LIVE FEED
            </span>
          </div>
          <div className="flex items-center gap-3">{stats}</div>
        </div>
        {children}
      </div>
    </div>
  );
}
