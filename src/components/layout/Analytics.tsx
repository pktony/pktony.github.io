import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

// Google Analytics 4. 페이지 로드 후(afterInteractive) 불러와 렌더링을 막지 않는다
export function Analytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
