'use client';

import React from 'react';

import { CustomRenderers, Serialize as SerializeContent } from './Serialize';

const classes = '';

export const RichText: React.FC<{
  className?: string;
  content: any;
  customRenderers?: CustomRenderers;
}> = ({ className, content, customRenderers }) => {
  if (!content) {
    return null;
  }

  return (
    <div className={[classes, className].filter(Boolean).join(' ')}>
      <SerializeContent content={content} customRenderers={customRenderers} />
    </div>
  );
};
