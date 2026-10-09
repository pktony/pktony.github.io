export function Logo({ text }: { text: string }) {
  return (
    <a href="#top" className="text-lg font-extrabold tracking-tight">
      {text}
    </a>
  );
}
