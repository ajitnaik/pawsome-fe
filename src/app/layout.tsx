import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BottomNav from './components/BottomNav'
import TermlyCookie from './components/TermlyCookie'
import Script from 'next/script'
import GoogleAnalytics from './components/GoogleAnalytics'
import ResponsiveAppBar from './components/ResponsiveAppBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PawsomeSearch',
  description: 'Find you next Pet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

<script type="text/javascript" async src="https://app.termly.io/embed.min.js" data-auto-block="on" data-website-uuid="ea6e5c02-80b0-427a-bb27-3d4dfa656016" ></script>

      {/* <Script src="https://app.termly.io/embed.min.js" data-auto-block="on" data-website-uuid="ea6e5c02-80b0-427a-bb27-3d4dfa656016" strategy='beforeInteractive'></Script> */}
      {/* <TermlyCookie /> */}
      <GoogleAnalytics />
      

      <body className={inter.className}>
        <ResponsiveAppBar/>
        {children}
        <BottomNav />
      </body>
    </html>
  )
}
