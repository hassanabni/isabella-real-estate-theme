import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const siteUrl = 'https://isabellareyesrealty.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Isabella Reyes Realty | Luxury Real Estate & Concierge Service',
    template: '%s | Isabella Reyes Realty',
  },
  description:
    'Isabella Reyes is a top-producing luxury real estate advisor delivering white-glove, concierge-level service for discerning buyers and sellers. Book your private consultation.',
  keywords: [
    'luxury real estate',
    'Isabella Reyes',
    'real estate agent',
    'concierge realty',
    'home buying',
    'home selling',
    'private consultation',
  ],
  authors: [{ name: 'Isabella Reyes' }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Isabella Reyes Realty | Luxury Real Estate',
    description:
      'White-glove, concierge-level real estate service for discerning buyers and sellers.',
    siteName: 'Isabella Reyes Realty',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Isabella Reyes Realty',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isabella Reyes Realty | Luxury Real Estate',
    description:
      'White-glove, concierge-level real estate service for discerning buyers and sellers.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a09',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Isabella Reyes Realty',
  description:
    'White-glove, concierge-level luxury real estate service for discerning buyers and sellers.',
  url: siteUrl,
  image: `${siteUrl}/images/isabella-headshot.png`,
  areaServed: 'United States',
  priceRange: '$$$$',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable} ${cormorant.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
