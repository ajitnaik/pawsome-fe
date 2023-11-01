"use client";
import Script from 'next/script';

const CookieBanner = () => {
    return (
        <Script
        src={`https://cdn-cookieyes.com/client_data/4a7dc23985ed7f208f57e6eb/script.js`} strategy="beforeInteractive"
    />
    )
};

export default CookieBanner;
