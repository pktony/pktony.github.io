// 브라우저 인쇄 대화상자(PDF로 저장)를 연다. 저장 파일명이 제목을 따르므로 인쇄 동안만 제목을 바꾼다.
export function printPage(fileTitle: string): void {
  const original = document.title;
  document.title = fileTitle;
  window.addEventListener("afterprint", () => (document.title = original), { once: true });
  window.print();
}
