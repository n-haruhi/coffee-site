import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'BREW - Modern Coffee Experience',
  description: 'Craft coffee experience with ethically sourced beans and artisan brewing techniques.',
  keywords: ['coffee', 'cafe', 'craft coffee', 'specialty coffee', 'artisan'],
  authors: [{ name: 'BREW Coffee' }],
  openGraph: {
    title: 'BREW - Modern Coffee Experience',
    description: 'Craft coffee experience with ethically sourced beans and artisan brewing techniques.',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
