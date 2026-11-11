import { Analytics } from '@vercel/analytics/next'
import { Bricolage_Grotesque, Google_Sans, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './portfolio.css'

const googleSans = Google_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-google-sans',
})

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage-grotesque',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000',
  ),
  title: 'Adi Meira – Senior Product Designer',
  description: 'Adi is a Harvard University alumn and a senior product designer with 7+ years of work experience',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Adi Meira – Senior Product Designer',
    description: 'Adi is a Harvard University alumn and a senior product designer with 7+ years of work experience',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adi Meira, a Harvard alum and senior product designer with 7+ years of experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adi Meira – Senior Product Designer',
    description: 'Adi is a Harvard University alumn and a senior product designer with 7+ years of work experience',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141314',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${googleSans.variable} ${bricolageGrotesque.variable} ${inter.variable} dark bg-background`}
    >
      <body className="antialiased font-sans" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
