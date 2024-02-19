import React from 'react';
import { BulletListBlock } from '../../payload-types';
import { Heading } from './heading';
import { RichText } from './RichText';

export const BulletListBlockComponent: React.FC<{ block: BulletListBlock }> = ({ block }) => {
  return (
    <div className="container p-4 m-4 md:px-20">
      <Heading label={block.header} />
      <RichText content={block.content} className="ml-4" />
    </div>
  );
};
