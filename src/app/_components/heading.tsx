import Image from 'next/image'
import React from 'react'

export const Heading: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="flex items-baseline gap-1">
      <Image src="/assets/rewind-icon.png" alt="rewind icon" width={20} height={20} />
      <p className="text-lg font-bold">{label}</p>
    </div>
  )
}
