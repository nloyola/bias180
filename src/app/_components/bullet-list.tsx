import React from 'react';
import { BulletListBlock } from '../../payload-types';
import { RichText } from './RichText';
import { Heading } from './heading';

export const BulletListBlockComponent: React.FC<{ block: BulletListBlock }> = ({ block }) => {
  return (
    <div className="container py-6">
      <Heading label={block.header} />
      <RichText content={block.content} className="ml-4" />
    </div>
  );
};
