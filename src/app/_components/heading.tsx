import React from 'react';
import { RewindIcon } from './rewind-incon';

export const Heading: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="flex items-baseline gap-1">
      <RewindIcon />
      <p className="text-lg font-bold">{label}</p>
    </div>
  );
};
