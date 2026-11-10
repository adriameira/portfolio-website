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
  title: 'Adi Meira — Product Designer',
  description: 'Senior product designer with 12 years of experience across early-stage startups, global companies and political campaigns. Studied digital government at Harvard GSD.',
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
