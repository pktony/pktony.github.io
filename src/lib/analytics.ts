// GA4 측정 ID는 공개 값이다(페이지 소스에 노출되는 값)
export const GA_MEASUREMENT_ID = "G-X5J7RWLYCX";

type GtagFn = (command: "event", name: string, params?: Record<string, string>) => void;

// gtag가 아직 없거나 차단된 환경(광고 차단 등)에서는 조용히 무시한다
export function trackEvent(name: string, params?: Record<string, string>) {
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  gtag?.("event", name, params);
}
