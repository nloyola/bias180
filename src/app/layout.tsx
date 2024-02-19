import { Footer } from './_components/footer';
import { NavMenu } from './_components/nav-menu';
import './index.css';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'Bias180',
  description: 'add description',
  metadataBase: new URL(`${process.env.VERCEL_URL}`)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container flex justify-between px-8">
          <div className="flex">
            <Image
              src="/assets/bias180-logo.webp"
              alt="Bias180 logo"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '50%', height: 'auto' }}
            />
          </div>
          <NavMenu />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
