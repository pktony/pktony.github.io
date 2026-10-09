import { themeInitScript } from "@/lib/theme";

// 첫 페인트 전에 저장된 테마를 적용해 깜빡임을 막는다
export function ThemeInitScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />;
}
