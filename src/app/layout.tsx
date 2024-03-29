import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { Footer } from './_components/footer';
import { NavMenu } from './_components/nav-menu';
import './index.css';

export const metadata = {
  title: 'Bias180',
  description: 'add description',
  metadataBase: new URL(`${process.env.VERCEL_URL}`),
};

const mont = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <div className="container flex items-center justify-between px-8 py-2">
          <Image
            src="/assets/bias180-logo.webp"
            alt="Bias180 logo"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '30%', height: 'auto' }}
          />
          <NavMenu />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
