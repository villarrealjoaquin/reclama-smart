import { montserrat, openSans, roboto } from '@/assets/fonts/fonts';
import { Footer, Navbar } from '@/components';
import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';

export const metadata: Metadata = {
  title: 'reclama smart',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <html lang="es" className={`${montserrat.variable} ${openSans.variable} ${roboto.variable}`}>
        <body>
          <Navbar />
            {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
