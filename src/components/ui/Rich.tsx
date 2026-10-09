import { parseBold } from "@/lib/parseBold";

// "**굵게**" 표기를 <strong>으로 렌더링
export function Rich({ text }: { text: string }) {
  return (
    <>
      {parseBold(text).map((part, i) =>
        part.bold ? <strong key={i}>{part.text}</strong> : <span key={i}>{part.text}</span>,
      )}
    </>
  );
}
