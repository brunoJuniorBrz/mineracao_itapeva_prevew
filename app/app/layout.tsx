
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mineração Itapeva - Líder em Filito no Brasil',
  description: 'Desde 1959, a Mineração Itapeva é a maior produtora de filito do Brasil. Especializada em mineração sustentável com 300.000 toneladas anuais.',
  keywords: 'mineração, filito, ligamil, itapeva, construção civil, cerâmica, sustentabilidade',
  authors: [{ name: 'Mineração Itapeva' }],
  openGraph: {
    title: 'Mineração Itapeva - Líder em Filito no Brasil',
    description: 'Maior produtora de filito do Brasil desde 1959. Qualidade, sustentabilidade e tradição.',
    url: 'https://mineracaoitapeva.com.br',
    siteName: 'Mineração Itapeva',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mineração Itapeva - Líder em Filito no Brasil',
    description: 'Maior produtora de filito do Brasil desde 1959. Qualidade, sustentabilidade e tradição.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
