// Moiime 외부 애니메이션 리타게팅 파이프라인 + 3차 회귀 검증 추이·정밀 지표 통합 SVG.
// 색은 사이트 토큰(canvas·card·ink·muted·line·accent·chip)만 사용해 라이트·다크·인쇄에 자동 대응한다.
export function RetargetingDiagram() {
  const steps = [
    { num: "01", title: "외부 클립 입력", sub: "Mixamo 22본 · SMPL-H 67본", x: 24, w: 174, highlight: false },
    { num: "02", title: "비파괴 rest 추출", sub: "클론 샘플링 · 오염 차단", x: 224, w: 174, highlight: false },
    { num: "03", title: "rest-상대 델타 변환", sub: "T-pose ↔ Y축 쿼터니언", x: 424, w: 174, highlight: false },
    { num: "04", title: "루트-상대 정규화", sub: "축 뒤틀림 없는 실시간 재생", x: 624, w: 172, highlight: true },
  ];

  const rounds = [
    {
      label: "1차 검증",
      count: "11 / 16",
      ratio: 11 / 16,
      note: "체인 본 크래시 · 스케일 팽창 · 저장본 불일치 포착",
      y: 222,
      barClass: "fill-muted",
      barOpacity: 0.45,
      valClass: "fill-muted",
      noteClass: "fill-muted",
      passed: false,
    },
    {
      label: "2차 검증",
      count: "12 / 16",
      ratio: 12 / 16,
      note: "세부 버그 2/2 수정 · 재저장 2건 확인 (잔여 4건)",
      y: 286,
      barClass: "fill-accent",
      barOpacity: 0.55,
      valClass: "fill-muted",
      noteClass: "fill-muted",
      passed: false,
    },
    {
      label: "3차 검증",
      count: "16 / 16",
      ratio: 1,
      note: "변경 없는 저장 재베이크 적용 · 4/4 해결 및 전원 통과",
      y: 350,
      barClass: "fill-accent",
      barOpacity: 1,
      valClass: "fill-accent",
      noteClass: "fill-ink",
      passed: true,
    },
  ];

  const kpis = [
    { label: "정점 최대 오차", value: "< 1 µm", sub: "몸·옷·얼굴 23/25 메시", x: 476, y: 212 },
    { label: "본 회전 오차", value: "0°", sub: "Mixamo 5클립 × 9프레임", x: 642, y: 212 },
    { label: "Mixamo 본 연결", value: "52 / 52", sub: "검증 FBX 전체 일치", x: 476, y: 318 },
    { label: "재다운로드 차감", value: "0", sub: "외형 해시 과금 유지", x: 642, y: 318 },
  ];

  const barWidth = 408;

  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 820 438"
        role="img"
        aria-label="외부 애니메이션 리타게팅 4단계 파이프라인(외부 클립 입력, 비파괴 rest 추출, rest-상대 델타 변환, 루트-상대 정규화)과 실사용 16건 1차 11/16, 2차 12/16, 3차 16/16 회귀 검증 추이 및 정밀 수치(정점 오차 1µm 미만, 본 회전 오차 0°, Mixamo 본 연결 52/52, 재다운로드 차감 0) 요약 다이어그램"
        className="h-auto w-full rounded-xl border border-line bg-card"
      >
        <defs>
          <marker id="retarget-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
            <path d="M0 0 10 5 0 10z" className="fill-muted" />
          </marker>
        </defs>

        {/* Top band: Retargeting Pipeline */}
        <text x={24} y={32} className="fill-muted font-mono text-[11px] tracking-[0.06em]">
          RETARGETING PIPELINE
        </text>

        {steps.map((step, idx) => (
          <g key={step.num}>
            <rect
              x={step.x}
              y={46}
              width={step.w}
              height={94}
              rx={8}
              strokeWidth={step.highlight ? 1.5 : 1.2}
              className={step.highlight ? "fill-canvas stroke-accent" : "fill-canvas stroke-line"}
            />
            <rect x={step.x + 12} y={58} width={28} height={18} rx={4} className="fill-chip" />
            <text
              x={step.x + 26}
              y={67}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-chip-ink font-mono text-[10.5px] font-semibold"
            >
              {step.num}
            </text>
            <text x={step.x + 12} y={100} className="fill-ink text-[13px] font-semibold">
              {step.title}
            </text>
            <text x={step.x + 12} y={121} className="fill-muted text-[11px]">
              {step.sub}
            </text>
            {idx < steps.length - 1 && (
              <line
                x1={step.x + step.w + 4}
                y1={93}
                x2={steps[idx + 1].x - 5}
                y2={93}
                strokeWidth={1.6}
                markerEnd="url(#retarget-arrow)"
                className="stroke-muted"
              />
            )}
          </g>
        ))}

        {/* Band divider */}
        <line x1={24} y1={164} x2={796} y2={164} strokeWidth={1} className="stroke-line" />

        {/* Bottom-left: 1st -> 3rd Regression Progress */}
        <text x={24} y={194} className="fill-muted font-mono text-[11px] tracking-[0.06em]">
          REGRESSION · 실사용 8명 × 2옵션 (16건)
        </text>

        {rounds.map((r) => (
          <g key={r.label}>
            <text x={24} y={r.y} className="fill-ink text-[12.5px] font-semibold">
              {r.label}
            </text>
            {r.passed && (
              <g>
                <rect x={82} y={r.y - 13} width={44} height={17} rx={8.5} className="fill-chip" />
                <text
                  x={104}
                  y={r.y - 4.5}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="fill-chip-ink font-mono text-[10px] font-semibold"
                >
                  PASS
                </text>
              </g>
            )}
            <text x={24 + barWidth} y={r.y} textAnchor="end" className={`${r.valClass} font-mono text-[12.5px] font-semibold`}>
              {r.count}
            </text>
            <rect x={24} y={r.y + 8} width={barWidth} height={12} rx={6} strokeWidth={1} className="fill-canvas stroke-line" />
            <rect
              x={24}
              y={r.y + 8}
              width={Math.round(barWidth * r.ratio)}
              height={12}
              rx={6}
              fillOpacity={r.barOpacity}
              className={r.barClass}
            />
            <text x={24} y={r.y + 36} className={`${r.noteClass} text-[11px]`}>
              {r.note}
            </text>
          </g>
        ))}

        <text x={24} y={414} className="fill-muted text-[10.5px]">
          Blender · Unity 대조로 헤어 13.8mm · 이동 단위 ×100 결함까지 포착 후 보정
        </text>

        {/* Column divider */}
        <line x1={454} y1={182} x2={454} y2={416} strokeWidth={1} className="stroke-line" />

        {/* Bottom-right: 2x2 Precision & Integrity KPIs */}
        <text x={476} y={194} className="fill-muted font-mono text-[11px] tracking-[0.06em]">
          PRECISION &amp; INTEGRITY
        </text>

        {kpis.map((kpi) => (
          <g key={kpi.label}>
            <rect x={kpi.x} y={kpi.y} width={154} height={94} rx={8} strokeWidth={1.2} className="fill-canvas stroke-line" />
            <text x={kpi.x + 14} y={kpi.y + 24} className="fill-muted text-[11px]">
              {kpi.label}
            </text>
            <text x={kpi.x + 14} y={kpi.y + 57} className="fill-accent font-mono text-[22px] font-bold">
              {kpi.value}
            </text>
            <text x={kpi.x + 14} y={kpi.y + 79} className="fill-muted text-[10.5px]">
              {kpi.sub}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-2 text-meta text-muted">
        외부 애니메이션 리타게팅 4단계 변환 파이프라인과 Blender·Unity 3차 회귀 검증 요약
      </figcaption>
    </figure>
  );
}
