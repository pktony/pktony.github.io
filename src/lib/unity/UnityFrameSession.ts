import type { GameBuild } from "@/types/game";
import { readUnityMessage } from "./protocol";

export type UnityState = { phase: "loading" | "running" | "error"; progress: number };
let pendingDisposal: Promise<void> = Promise.resolve();

export class UnityFrameSession {
  private frame: HTMLIFrameElement | null = null;
  private disposed = false;
  private phase: UnityState["phase"] = "loading";
  private timeout?: ReturnType<typeof setTimeout>;
  private finishDisposal?: () => void;
  private disposal?: Promise<void>;

  constructor(private host: HTMLElement, private build: GameBuild, private onState: (state: UnityState) => void) {}

  async start() {
    await pendingDisposal;
    if (this.disposed || !this.host.isConnected) return;
    this.frame = document.createElement("iframe");
    this.frame.title = "Modular Grid Inventory — 마우스와 키보드로 조작";
    this.frame.allow = "fullscreen";
    this.frame.allowFullscreen = true;
    this.frame.tabIndex = -1;
    this.frame.src = this.build.url;
    this.frame.addEventListener("error", this.fail);
    window.addEventListener("message", this.receive);
    this.timeout = setTimeout(this.fail, 120000);
    this.host.append(this.frame);
  }

  private receive = (event: MessageEvent) => {
    const message = readUnityMessage(event, this.frame?.contentWindow ?? null, location.origin, this.build.channel);
    if (!message) return;
    if (this.disposed) { if (message.type === "stopped") this.finishDisposal?.(); return; }
    if (this.phase === "error") return;
    if (message.type === "progress" && this.phase === "loading") this.onState({ phase: "loading", progress: message.value });
    if (message.type === "ready") {
      clearTimeout(this.timeout);
      this.phase = "running";
      if (this.frame) this.frame.tabIndex = 0;
      this.onState({ phase: "running", progress: 1 });
    }
    if (message.type === "error" || message.type === "stopped") this.fail();
  };

  private fail = () => {
    if (this.disposed || this.phase === "error") return;
    clearTimeout(this.timeout);
    this.phase = "error";
    this.onState({ phase: "error", progress: 0 });
    void this.dispose();
  };

  focus() { this.frame?.contentWindow?.postMessage({ channel: this.build.channel, type: "focus" }, location.origin); this.frame?.focus({ preventScroll: true }); }

  dispose(waitForQuit = true): Promise<void> {
    if (this.disposal) return this.disposal;
    this.disposed = true;
    clearTimeout(this.timeout);
    const frame = this.frame;
    if (!frame) return Promise.resolve();
    frame.style.pointerEvents = "none";
    frame.tabIndex = -1;
    frame.setAttribute("aria-hidden", "true");
    this.disposal = new Promise<void>(resolve => {
      const timeout = setTimeout(() => this.finishDisposal?.(), 3000);
      this.finishDisposal = () => {
        clearTimeout(timeout);
        window.removeEventListener("message", this.receive);
        frame.removeEventListener("error", this.fail);
        frame.remove();
        this.frame = null;
        resolve();
      };
      frame.contentWindow?.postMessage({ channel: this.build.channel, type: "quit" }, location.origin);
      if (!waitForQuit || !frame.isConnected) this.finishDisposal();
    });
    pendingDisposal = this.disposal;
    return this.disposal;
  }
}
