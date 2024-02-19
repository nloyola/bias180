'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <div className="mt-20 min-w-full bg-cover">
      <div className="min-w-full bg-cover">
        <div className="container">
          <div className="flex justify-center py-8">
            <Image
              src="/assets/bias180-logo.webp"
              alt="Bias180 logo"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '20%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
