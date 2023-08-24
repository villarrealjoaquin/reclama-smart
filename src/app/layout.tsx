import { Footer, Navbar } from '@/components';
import type { Metadata } from 'next';
import { Roboto, Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'optional'
});
const montserrat = Montserrat({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'optional'
});
const openSans = Open_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-openSans',
  display: 'optional'
});

export const metadata: Metadata = {
  title: 'reclama smart',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} ${openSans.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
