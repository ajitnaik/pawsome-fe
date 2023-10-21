"use client";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-MZCP7Y54KY`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MZCP7Y54KY',{ 'debug_mode':true });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;