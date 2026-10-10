import { useEffect } from "react";

// 모달이 열려 있는 동안 뒤 화면 스크롤을 잠근다
export function useBodyScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [locked]);
}
