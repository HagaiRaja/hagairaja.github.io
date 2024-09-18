import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Hagai Raja Sinulingga',
    template: '%s | Hagai Raja Sinulingga',
  },
  description: 'This is Hagai Raja Sinulingga portfolio.',
  openGraph: {
    title: 'Hagai Raja Sinulingga Portfolio',
    description: `Hi there! I’m Hagai, an AI researcher and engineer originally from Indonesia, with a penchant for solving complex problems using cutting-edge algorithms. Armed with a master’s degree from Sejong University (4.5 GPA, I’m serious!), I’ve spent the last few years developing AI solutions for satellite imagery and remote sensing, making sure our planet is mapped better than ever!

My expertise spans object detection, few-shot segmentation, and even super-resolution—think of it as making low-res images magically clear! Alongside AI, I’ve dabbled in finance, startups, and politics. Also, did I mention I love tackling AI challenges? From ESA to KARI, I’m always testing new algorithms in global competitions.

When I’m not glued to my screen, you’ll find me running through the city’s parks. It’s my all-in-one: staying fit, meeting new people, and sparking fresh ideas for my next AI project. I'll post it here, so stay tuned!`,
    url: baseUrl,
    siteName: 'hagairaja.github.io',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-white bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <link rel="icon" href="/assets/logo.webp" />
      </head>
      <body>
        <main className="flex-auto min-w-0 flex flex-col">
          <Navbar />
          <div className="antialiased max-w-4xl mx-4 mt-8 lg:mx-auto">
            {children}
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
