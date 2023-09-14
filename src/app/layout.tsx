import { montserrat, openSans, roboto } from '@/assets/fonts/fonts';
import { Footer, Navbar } from '@/components';
import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} ${roboto.variable}`}>
      <body>

          <Navbar />
          {children}
          <Footer />
    
      </body>
    </html>
  )
}
