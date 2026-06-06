import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Unimatch — Find Your University',
  description: 'The dedicated platform for the university decision. AI-powered guidance, verified data, free for every student.',
  metadataBase: new URL('https://uninav.app'),
  openGraph: {
    title: 'Unimatch.',
    description: 'The place built for the university decision.',
    url: 'https://uninav.app',
    siteName: 'Unimatch',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: '64px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
