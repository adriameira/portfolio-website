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
  metadataBase: new URL('https://a-meira.com'),
  title: 'Adria Meira – Senior Product Designer | Fintech & AI Products | Boston',
  description:
    'Adria Meira is a Senior Product Designer in Boston specializing in fintech, AI and compliance UX. Ex-OKX, Harvard GSD. Case studies in KYC, AI agents and design systems.',
  keywords: ['Adria Meira', 'Senior Product Designer', 'fintech', 'AI', 'compliance UX', 'Boston'],
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
    title: 'Adria Meira – Senior Product Designer | Fintech & AI Products | Boston',
    description:
      'Adria Meira is a Senior Product Designer in Boston specializing in fintech, AI and compliance UX. Ex-OKX, Harvard GSD. Case studies in KYC, AI agents and design systems.',
    siteName: 'Adria Meira',
    url: 'https://a-meira.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adria Meira, Senior Product Designer in fintech and AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adria Meira – Senior Product Designer | Fintech & AI Products | Boston',
    description:
      'Adria Meira is a Senior Product Designer in Boston specializing in fintech, AI and compliance UX. Ex-OKX, Harvard GSD. Case studies in KYC, AI agents and design systems.',
    images: ['/og-image.png'],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adria Meira',
  alternateName: 'Adi Meira',
  jobTitle: 'Senior Product Designer',
  url: 'https://a-meira.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Boston',
    addressRegion: 'MA',
    addressCountry: 'US',
  },
  sameAs: ['https://www.linkedin.com/in/adriameira/'],
  knowsAbout: ['Fintech', 'AI products', 'Compliance UX', 'Civic technology', 'Product design'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
