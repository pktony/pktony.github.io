"use client";

import type { ControlValues } from "@/lib/vision/types";

interface Props {
  controls: ControlValues;
  onChange: (controls: ControlValues) => void;
}

interface ToggleItem {
  key: keyof ControlValues;
  label: string;
  labelKr: string;
}

const TOGGLES: ToggleItem[] = [
  { key: "showMesh", label: "MESH", labelKr: "메시" },
  { key: "showLines", label: "GUIDE", labelKr: "가이드라인" },
  { key: "showIndices", label: "INDEX", labelKr: "인덱스" },
  { key: "showBbox", label: "BBOX", labelKr: "바운딩박스" },
  { key: "showMosaic", label: "MOSAIC", labelKr: "모자이크" },
];

function SliderControl({
  label,
  labelKr,
  value,
  onChange,
}: {
  label: string;
  labelKr: string;
  value: number;
  onChange: (v: number) => void;
}) {
  const pct = Math.round(value * 100);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div>
          <span
            className="block font-mono tracking-wider"
            style={{ color: "var(--text-primary)", fontSize: "12px" }}
          >
            {label}
          </span>
          <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>
            {labelKr}
          </span>
        </div>
        <span
          className="rounded-md px-2.5 py-1 font-mono"
          style={{
            background: "var(--accent-amber-dim)",
            color: "var(--accent-amber)",
            border: "1px solid color-mix(in srgb, var(--accent-amber) 35%, transparent)",
            fontSize: "12px",
          }}
        >
          {pct}%
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={50}
        value={pct}
        aria-label={labelKr}
        onChange={(e) => onChange(Number(e.target.value) / 100)}
        className="w-full"
      />
      <div className="mt-1 flex justify-between font-mono" style={{ color: "var(--text-muted)", fontSize: "10px" }}>
        <span>STRICT</span>
        <span>LENIENT</span>
      </div>
    </div>
  );
}

export function ControlPanel({ controls, onChange }: Props) {
  const update = (partial: Partial<ControlValues>) =>
    onChange({ ...controls, ...partial });

  return (
    <div
      className="w-full overflow-hidden rounded-2xl"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      <div
        className="px-5 py-3.5"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <span
          className="block text-meta font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          허용 오차 &amp; 시각화
        </span>
        <span
          className="mt-0.5 block leading-relaxed"
          style={{ color: "var(--text-muted)", fontSize: "12px" }}
        >
          허용 오차가 낮을수록 엄격한 황금비율 판정, 높을수록 관대한 판정을 합니다.
        </span>
      </div>

      <div className="space-y-5 p-5">
        <div className="space-y-4">
          <SliderControl
            label="EYE DISTANCE"
            labelKr="눈 거리 허용 오차"
            value={controls.tolEye}
            onChange={(v) => update({ tolEye: v })}
          />
          <SliderControl
            label="NOSE-CHIN"
            labelKr="코-턱 허용 오차"
            value={controls.tolNoseChin}
            onChange={(v) => update({ tolNoseChin: v })}
          />
        </div>

        <div className="h-px" style={{ background: "var(--border-subtle)" }} />

        <div>
          <span
            className="mb-3 block font-mono tracking-widest"
            style={{ color: "var(--text-muted)", fontSize: "11px" }}
          >
            VISUALIZATION
          </span>
          <div className="space-y-2">
            {TOGGLES.map(({ key, label, labelKr }) => {
              const isOn = controls[key] as boolean;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => update({ [key]: !isOn } as Partial<ControlValues>)}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-all"
                  style={{
                    background: isOn ? "var(--accent-cyan-dim)" : "var(--bg-secondary)",
                    border: `1px solid ${isOn ? "var(--accent-cyan)" : "var(--border-subtle)"}`,
                  }}
                >
                  <div
                    className="flex h-5 w-7 items-center justify-center rounded-md font-mono font-bold"
                    style={{
                      background: isOn ? "var(--accent-cyan)" : "var(--bg-card)",
                      color: isOn ? "var(--bg-primary)" : "var(--text-muted)",
                      fontSize: "10px",
                      border: isOn ? "none" : "1px solid var(--border-subtle)",
                    }}
                  >
                    {isOn ? "ON" : "OFF"}
                  </div>
                  <div className="flex-1 text-left">
                    <span
                      className="block font-mono tracking-wider"
                      style={{
                        color: isOn ? "var(--accent-cyan)" : "var(--text-secondary)",
                        fontSize: "12px",
                      }}
                    >
                      {label}
                    </span>
                    <span style={{ color: "var(--text-muted)", fontSize: "11px" }}>
                      {labelKr}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
