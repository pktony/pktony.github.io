// "https://pktony.github.io/" → "pktony.github.io" (화면에 보여 줄 주소)
export const displayUrl = (url: string): string => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
