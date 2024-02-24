import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import React from 'react';

const variants = cva('', {
  variants: {
    size: {
      default: '16',
      sm: '8',
      lg: '20',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface RewindIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> {
  asChild?: boolean;
}

export const RewindIcon = React.forwardRef<HTMLImageElement, RewindIconProps>(({ size }, ref) => {
  const v = variants({ size });
  const sz = parseInt(v);
  return <Image src="/assets/rewind-icon.png" alt="rewind icon" width={sz} height={sz} ref={ref} />;
});
