import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

// Display / títulos — moderna, geométrica, impactante
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-cabinet',
  display: 'swap',
})

// Mono — JetBrains Mono, padrão da indústria dev
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

// Corpo — Plus Jakarta Sans, legível e moderna
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Marcos André — Fullstack Dev & DevOps',
  description:
    'Desenvolvedor Full-Stack & DevOps especialista em Next.js, Node.js, Docker e CI/CD. Cabo Frio, RJ.',
  keywords: [
    'Fullstack Developer', 'DevOps Engineer', 'Next.js',
    'Node.js', 'Docker', 'React', 'TypeScript', 'Cabo Frio', 'Brasil',
  ],
  authors: [{ name: 'Marcos André' }],
  openGraph: {
    title: 'Marcos André — Fullstack Dev & DevOps',
    description: 'Desenvolvedor Full-Stack & DevOps. Next.js, Node.js, Docker, CI/CD.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f9fc' },
    { media: '(prefers-color-scheme: dark)',  color: '#0d0f14' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${bricolage.variable} ${jetbrains.variable} ${jakarta.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}