export type TextPart = { text: string; bold: boolean };

// "일반 **굵게** 일반" → [{일반}, {굵게, bold}, {일반}]
export function parseBold(source: string): TextPart[] {
  return source
    .split(/\*\*(.+?)\*\*/g)
    .map((text, i) => ({ text, bold: i % 2 === 1 }))
    .filter((part) => part.text.length > 0);
}
