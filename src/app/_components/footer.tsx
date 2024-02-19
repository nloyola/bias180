'use client'

import Image from 'next/image'

export function Footer() {
  return (
    <div className="mt-20 min-w-full bg-cover">
      <div className="min-w-full bg-cover">
        <div className="container">
          <div className="flex justify-center py-8">
            <Image
              src="/assets/bias180-logo.webp"
              alt="Bias180 logo"
              className="object-contain"
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
