"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExpandIcon } from "@/components/icons/ExpandIcon";
import { UnityFrameSession, type UnityState } from "@/lib/unity/UnityFrameSession";
import type { Game } from "@/types/game";
import { UnityPlayerOverlay } from "./UnityPlayerOverlay";
import { useDesktopPointer } from "./useDesktopPointer";
import styles from "./games.module.css";

export function UnityPlayer({ game }: { game: Game }) {
  const desktop = useDesktopPointer();
  const host = useRef<HTMLDivElement>(null);
  const session = useRef<UnityFrameSession | null>(null);
  const [state, setState] = useState<UnityState | null>(null);
  const [fullscreenError, setFullscreenError] = useState("");
  const [stopping, setStopping] = useState(false);
  const mounted = useRef(true);
  const operation = useRef(0);

  useEffect(() => {
    mounted.current = true;
    const leave = () => { void session.current?.dispose(false); session.current = null; };
    const restore = (event: PageTransitionEvent) => {
      if (event.persisted) { operation.current++; setState(null); setStopping(false); setFullscreenError(""); }
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
      setState(null); setStopping(false); setFullscreenError("");
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

  async function fullscreen() {
    try { await session.current?.fullscreen(); setFullscreenError(""); }
    catch { setFullscreenError("전체 화면을 사용할 수 없습니다. 새 창 실행을 이용해 주세요."); }
  }

  const phase = state?.phase ?? "idle";
  const status = stopping ? "데모 종료 중" : phase === "running" ? "실행 중 · 플레이어를 클릭한 뒤 조작하세요." : phase === "loading" ? "데모 로딩 중" : phase === "error" ? "불러오기 실패 · 재시도 또는 영상 보기" : desktop ? "시작 전 · 마우스와 키보드 필요" : "모바일에서는 시연 영상 제공";

  return <section aria-label={`${game.name} 플레이어`}>
    <div className={styles.player} aria-busy={phase === "loading"}>
      <Image src={game.image.src} alt={game.image.alt} fill sizes="(max-width: 850px) 100vw, 75vw" className={styles.previewImage} priority />
      <div ref={host} className={styles.frameHost} />
      <UnityPlayerOverlay game={game} desktop={desktop} state={state} onStart={start} />
    </div>
    <div className={styles.playerBar}>
      <span role={phase === "error" ? "alert" : "status"} aria-atomic="true" className={styles.runtimeStatus}>{fullscreenError || status}</span>
      {state && <div className={styles.playerActions}>
        <button className={styles.button} disabled={stopping} onClick={stop}>{stopping ? "종료 중" : "데모 종료"}</button>
        {phase === "running" && <button className={styles.button} aria-label="플레이어 전체 화면" onClick={fullscreen}><ExpandIcon /></button>}
      </div>}
    </div>
    {phase === "running" && <p className={styles.playerHint}>전체 화면으로 넓게 체험할 수 있습니다. 게임 안의 RESET으로 아이템 배치를 초기화하세요.</p>}
  </section>;
}
