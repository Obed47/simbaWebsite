import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'

// Poppins is the typeface used across the SIMBA brand materials. Only the
// weights used on the site are loaded, and the font is self-hosted at build time.
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  // metadataBase is only set when the public URL is confirmed. Until then,
  // canonical and absolute social URLs are omitted rather than guessed.
  ...(siteConfig.siteUrl ? { metadataBase: new URL(siteConfig.siteUrl) } : {}),
  title: {
    default: siteConfig.title,
    template: '%s · SIMBA',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'commerce en ligne Cameroun',
    'boutique en ligne',
    'vendre sur WhatsApp',
    'Mobile Money',
    'Orange Money',
    'MTN MoMo',
    'commerce local',
    'petits commerçants',
  ],
  authors: [{ name: 'Équipe SIMBA' }],
  icons: {
    icon: '/icon.png',
  },
  alternates: siteConfig.siteUrl ? { canonical: '/' } : undefined,
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    ...(siteConfig.siteUrl ? { url: '/' } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c2159',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang={siteConfig.language} className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {/* Scroll-reveal sections start invisible and fade in via JS
            (see Reveal.tsx). Without JavaScript that never fires, so this
            safety net forces them visible instead of permanently hidden. */}
        <noscript>
          <style>{`[class*="opacity-0"]{opacity:1 !important}[class*="translate-y-5"],[class*="-translate-x-2"],[class*="-translate-y-2"]{transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
