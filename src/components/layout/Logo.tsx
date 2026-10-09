// 사이트 주소를 로고로 쓴다. 한 줄로 고정해 좁은 화면에서도 꺾이지 않게 한다
export function Logo({ text }: { text: string }) {
  return (
    <a href="#top" className="shrink-0 whitespace-nowrap text-base font-extrabold tracking-tight sm:text-lg">
      {text}
    </a>
  );
}
