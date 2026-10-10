export type TextKind = "plain" | "bold" | "mark";
export type TextPart = { text: string; kind: TextKind };

// 표기 → 종류. 새 표기는 이 표에 한 줄만 추가하면 된다 (bold: 구절 강조, mark: 성과 수치 강조)
const MARKERS: Record<string, Exclude<TextKind, "plain">> = {
  "**": "bold",
  "==": "mark",
};

const escapeRegExp = (s: string) => Array.from(s, (ch) => (/\w/.test(ch) ? ch : `\\${ch}`)).join("");
const SPLIT = new RegExp(
  `(${Object.keys(MARKERS).map((m) => `${escapeRegExp(m)}.+?${escapeRegExp(m)}`).join("|")})`,
  "g",
);

// "일반 **굵게** ==수치==" → [{일반}, {굵게, bold}, {수치, mark}]
export function parseRich(source: string): TextPart[] {
  return source
    .split(SPLIT)
    .map((chunk): TextPart => {
      const marker = Object.keys(MARKERS).find((m) => chunk.length > m.length * 2 && chunk.startsWith(m) && chunk.endsWith(m));
      return marker ? { text: chunk.slice(marker.length, -marker.length), kind: MARKERS[marker] } : { text: chunk, kind: "plain" };
    })
    .filter((part) => part.text.length > 0);
}
