import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import BottomNav from './components/BottomNav';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import GoogleAnalytics from './components/GoogleAnalytics';
import Script from 'next/script';
import TermlyCookie from './components/TermlyCookie';

const inter = Inter({ subsets: ['latin'] });

type Props = {
    children: ReactNode;
    params: { locale: string };
};

async function getMessages(locale: string) {
    try {
        return (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
}

export async function generateStaticParams() {
    return ['en', 'de'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
    const messages = await getMessages(locale);

    // You can use the core (non-React) APIs when you have to use next-intl
    // outside of components. Potentially this will be simplified in the future
    // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
    const t = createTranslator({ locale, messages });

    return {
        title: t('LocaleLayout.title')
    };
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: Props) {
    const messages = await getMessages(locale);

    return (
        <html className="h-full" lang={locale}>
            {/* <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/4a7dc23985ed7f208f57e6eb/script.js"></script> */}

            {/* <Script
                src={`https://cdn-cookieyes.com/client_data/4a7dc23985ed7f208f57e6eb/script.js`} strategy="beforeInteractive"
            /> */}
            {/* <script
  type="text/javascript"
  src="https://app.termly.io/embed.min.js"
  data-auto-block="on"
  data-website-uuid="ea6e5c02-80b0-427a-bb27-3d4dfa656016"
></script> */}
            <TermlyCookie/>
            <GoogleAnalytics />
            <body className={clsx(inter.className, 'flex h-full flex-col')}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ResponsiveAppBar />

                    {children}
                    <BottomNav />

                </NextIntlClientProvider>
            </body>
        </html>
    );
}