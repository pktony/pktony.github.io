import type { FlowGraphData } from "@/types/resume";

const LABEL_CHAR_W = 8.6;
const LABEL_PAD = 16;

// 노드와 선(직각 꺾임 경로)으로 이루어진 흐름도를 SVG로 그린다. 색은 사이트 토큰을 써서 라이트·다크에서 모두 보인다
export function FlowGraph({ graph }: { graph: FlowGraphData }) {
  return (
    <figure style={{ maxWidth: graph.maxWidth }}>
      <svg
        viewBox={`0 0 ${graph.width} ${graph.height}`}
        role="img"
        aria-label={graph.alt}
        className="h-auto w-full rounded-xl border border-line bg-card p-1"
      >
        <defs>
          <marker id="flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10z" className="fill-muted" />
          </marker>
        </defs>

        {graph.edges.map((edge) => (
          <path key={edge.path} d={edge.path} fill="none" strokeWidth={1.6} markerEnd="url(#flow-arrow)" className="stroke-muted" />
        ))}

        {graph.nodes.map((node) =>
          node.shape === "circle" ? (
            <g key={node.id}>
              <ellipse cx={node.x + node.w / 2} cy={node.y + node.h / 2} rx={node.w / 2} ry={node.h / 2} strokeWidth={1.6} className="fill-canvas stroke-muted" />
              <text x={node.x + node.w / 2} y={node.y + node.h / 2} textAnchor="middle" dominantBaseline="central" className="fill-ink font-mono text-[15px]">
                {node.label}
              </text>
            </g>
          ) : (
            <g key={node.id}>
              <rect x={node.x} y={node.y} width={node.w} height={node.h} rx={6} strokeWidth={1.6} className="fill-canvas stroke-muted" />
              <text x={node.x + node.w / 2} y={node.y + node.h / 2} textAnchor="middle" dominantBaseline="central" className="fill-ink font-mono text-[15px]">
                {node.label}
              </text>
            </g>
          ),
        )}

        {graph.edges.map((edge) => {
          if (!edge.label) return null;
          const w = edge.label.text.length * LABEL_CHAR_W + LABEL_PAD;
          return (
            <g key={`label-${edge.path}`}>
              <rect x={edge.label.x - w / 2} y={edge.label.y - 13} width={w} height={26} rx={5} className="fill-chip" />
              <text x={edge.label.x} y={edge.label.y} textAnchor="middle" dominantBaseline="central" className="fill-chip-ink font-mono text-[13px]">
                {edge.label.text}
              </text>
            </g>
          );
        })}
      </svg>
      {graph.caption && <figcaption className="mt-2 text-meta text-muted">{graph.caption}</figcaption>}
    </figure>
  );
}
