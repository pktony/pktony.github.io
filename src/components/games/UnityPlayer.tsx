"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExpandIcon } from "@/components/icons/ExpandIcon";
import { IconBase } from "@/components/icons/IconBase";
import { UnityFrameSession, type UnityState } from "@/lib/unity/UnityFrameSession";
import type { Game } from "@/types/game";
import { UnityPlayerOverlay } from "./UnityPlayerOverlay";
import { useDesktopPointer } from "./useDesktopPointer";
import { usePlayerFullscreen } from "./usePlayerFullscreen";
import { GameToolbar } from "./GameToolbar";
import styles from "./games.module.css";

export function UnityPlayer({ game }: { game: Game }) {
  const desktop = useDesktopPointer();
  const workspace = useRef<HTMLElement>(null);
  const fullscreen = usePlayerFullscreen(workspace);
  const host = useRef<HTMLDivElement>(null);
  const session = useRef<UnityFrameSession | null>(null);
  const [state, setState] = useState<UnityState | null>(null);
  const [stopping, setStopping] = useState(false);
  const mounted = useRef(true);
  const operation = useRef(0);

  useEffect(() => {
    mounted.current = true;
    const leave = () => { void session.current?.dispose(false); session.current = null; };
    const restore = (event: PageTransitionEvent) => {
      if (event.persisted) { operation.current++; setState(null); setStopping(false); }
    };
    window.addEventListener("pagehide", leave);
    window.addEventListener("pageshow", restore);
    return () => { window.removeEventListener("pagehide", leave); window.removeEventListener("pageshow", restore); mounted.current = false; operation.current++; leave(); };
  }, []);

  async function stop() {
    operation.current++;
    const current = session.current;
    session.current = null;
    setStopping(true);
    await current?.dispose();
    if (mounted.current) {
      setState(null); setStopping(false);
      requestAnimationFrame(() => host.current?.parentElement?.querySelector<HTMLElement>("button,a")?.focus({ preventScroll: true }));
    }
  }

  async function start() {
    if (!host.current || !game.build || stopping || !desktop) return;
    const old = session.current;
    const id = ++operation.current;
    session.current = null;
    setState({ phase: "loading", progress: 0 });
    await old?.dispose();
    if (!mounted.current || !host.current || id !== operation.current) return;
    const current = new UnityFrameSession(host.current, game.build, value => {
      if (mounted.current) setState(value);
    });
    session.current = current;
    void current.start();
  }

  const phase = state?.phase ?? "idle";
  const status = stopping ? "종료 중" : phase === "running" ? "실행 중" : phase === "loading" ? "로딩 중" : phase === "error" ? "불러오기 실패" : "시작 전";
  const previousFullscreen = useRef(fullscreen.active);
  useEffect(() => {
    const changed = previousFullscreen.current !== fullscreen.active;
    previousFullscreen.current = fullscreen.active;
    if (phase === "running" && (changed || document.activeElement === document.body)) session.current?.focus();
  }, [phase, fullscreen.active]);

  return <section ref={workspace} className={styles.workspace} aria-label={`${game.name} 플레이어`}>
    <GameToolbar game={game} actions={<>
      {state && <button className={styles.button} disabled={stopping} onClick={stop}>{stopping ? "종료 중" : "종료"}</button>}
      {(phase === "running" || fullscreen.active) && <button className={styles.button} aria-label={fullscreen.active ? "전체 화면 종료" : "플레이어 전체 화면"} aria-pressed={fullscreen.active} onClick={fullscreen.toggle}>
        {fullscreen.active ? <IconBase><path d="M3 9h6V3m12 12h-6v6M9 9 3 3m12 12 6 6" /></IconBase> : <ExpandIcon />}
        <span className={styles.fullscreenLabel}>{fullscreen.active ? "화면 복귀" : "전체 화면"}</span>
      </button>}
    </>} />
    {fullscreen.error && <p className={styles.notice} role="alert">{fullscreen.error}</p>}
    <div className={styles.player} aria-busy={phase === "loading"}>
      {!state && <Image src={game.image.src} alt={game.image.alt} fill sizes="100vw" className={styles.previewImage} priority />}
      <div ref={host} className={`${styles.frameHost} ${phase === "running" ? styles.frameReady : ""}`} aria-hidden={phase !== "running"} />
      <UnityPlayerOverlay game={game} desktop={desktop} state={state} onStart={start} />
    </div>
    <span role="status" aria-atomic="true" className="sr-only">{status}</span>
  </section>;
}
