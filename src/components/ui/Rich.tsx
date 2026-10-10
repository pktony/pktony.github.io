import { parseRich } from "@/lib/parseRich";

// 성과 수치: 모노 폰트 + 아래쪽만 칠한 형광펜. 글자색은 본문색을 유지해 대비를 지킨다
const MARK_CLASS =
  "box-decoration-clone bg-transparent bg-linear-to-t from-mark from-60% to-transparent to-60% px-0.5 font-mono font-bold text-inherit";

// "**굵게**"는 <strong>, "==수치=="는 <mark>로 렌더링
export function Rich({ text }: { text: string }) {
  return (
    <>
      {parseRich(text).map((part, i) => {
        if (part.kind === "bold") return <strong key={i}>{part.text}</strong>;
        if (part.kind === "mark") return <mark key={i} className={MARK_CLASS}>{part.text}</mark>;
        return <span key={i}>{part.text}</span>;
      })}
    </>
  );
}
