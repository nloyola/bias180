import React from 'react';
import { TextBlock } from '../../payload-types';
import { RichText } from './RichText';

export const TextBlockComponent: React.FC<{ block: TextBlock }> = ({ block }) => {
  return (
    <div className="px-6 md:px-20">
      <h1 className="py-4 text-3xl font-bold">{block.header}</h1>
      <RichText content={block.content} className="grid" />
    </div>
  );
};
