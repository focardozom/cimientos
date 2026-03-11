import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = localFont({
  src: '../public/fonts/Montserrat-VariableFont_wght.ttf',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'CIMIENTOS - Colectivo de investigación multidisciplinar',
  description: 'Investigación sobre primera infancia en Colombia y Latinoamérica con enfoque en innovación, equidad y transformación social',
  keywords: 'primera infancia, investigación, Colombia, Latinoamérica, políticas públicas, equidad, transformación social',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="smooth-scroll">
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
