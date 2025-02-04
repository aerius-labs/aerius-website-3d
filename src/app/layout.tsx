import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LoadingProvider } from '@/context/loadingContext';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aerius Labs',
  description: 'Aerius Labs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='m-0 cursor-none p-0'>
      <head>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-XGTFCGRW0F'
        ></Script>
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XGTFCGRW0F');
        `}
        </Script>
      </head>
      <body className={`${inter.className} m-0 p-0`}>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
