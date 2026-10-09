import type { ContactLink } from "@/types/resume";
import { profile } from "./profile";

// 화면과 PDF 어디서든 보이는 글자 링크. 아이콘만 있는 헤더와 달리 주소가 그대로 적힌다
export const contactLinks: ContactLink[] = [
  { text: "pktony.github.io", url: "https://pktony.github.io" },
  { text: "github.com/pktony", url: "https://github.com/pktony" },
  { text: "psw-tony.tistory.com", url: "https://psw-tony.tistory.com/" },
  { text: profile.email, url: `mailto:${profile.email}` },
];
