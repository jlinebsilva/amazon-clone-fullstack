import type { Metadata } from "next";
import { Arimo, Montserrat, Open_Sans } from 'next/font/google';
import '../styles/Globals.sass';

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arimo'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat'
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open_sans'
})

export const metadata: Metadata = {
  title: "Amazon Clone | FullStack",
  description: "Um clone responsivo feito com Next.js, SASS e TypeScript",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR"
      className={`${arimo.variable} ${montserrat.variable} ${open_sans.variable}`} >
      <body>{children}</body>
    </html>
  )
}