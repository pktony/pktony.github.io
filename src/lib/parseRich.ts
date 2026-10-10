export type TextPart = { text: string; kind: "plain" | "bold" | "mark" };

// "일반 **굵게** ==수치==" → [{일반}, {굵게, bold}, {수치, mark}]
// 굵게는 구절 강조, mark는 성과 수치 강조에 쓴다
export function parseRich(source: string): TextPart[] {
  return source
    .split(/(\*\*.+?\*\*|==.+?==)/g)
    .map((chunk): TextPart => {
      if (chunk.startsWith("**") && chunk.endsWith("**") && chunk.length > 4) return { text: chunk.slice(2, -2), kind: "bold" };
      if (chunk.startsWith("==") && chunk.endsWith("==") && chunk.length > 4) return { text: chunk.slice(2, -2), kind: "mark" };
      return { text: chunk, kind: "plain" };
    })
    .filter((part) => part.text.length > 0);
}
