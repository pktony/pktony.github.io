import { parseRich, type TextKind } from "@/lib/parseRich";
import type { ReactNode } from "react";
import { Highlight } from "./Highlight";

const render: Record<TextKind, (text: string) => ReactNode> = {
  plain: (text) => text,
  bold: (text) => <strong>{text}</strong>,
  mark: (text) => <Highlight>{text}</Highlight>,
};

// 본문 안의 "**굵게**"(구절)와 "==수치=="(성과 수치) 표기를 렌더링한다
export function Rich({ text }: { text: string }) {
  return (
    <>
      {parseRich(text).map((part, i) => (
        <span key={i} className="contents">
          {render[part.kind](part.text)}
        </span>
      ))}
    </>
  );
}
