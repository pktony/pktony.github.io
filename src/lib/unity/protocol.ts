export type UnityMessage =
  | { type: "progress"; value: number }
  | { type: "ready" | "error" | "stopped" };

export function readUnityMessage(event: MessageEvent, source: Window | null, origin: string, channel: string): UnityMessage | null {
  if (!source || event.source !== source || event.origin !== origin || !event.data || event.data.channel !== channel) return null;
  const { type, value } = event.data;
  if (type === "progress" && typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 1) return { type, value };
  if (type === "ready" || type === "error" || type === "stopped") return { type };
  return null;
}
