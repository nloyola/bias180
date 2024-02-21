import React from 'react';
import { BulletListBlock } from '../../payload-types';
import { RichText } from './RichText';
import { Heading } from './heading';

export const BulletListBlockComponent: React.FC<{ block: BulletListBlock }> = ({ block }) => {
  return (
    <div className="container m-4 p-4 md:px-20">
      <Heading label={block.header} />
      <RichText content={block.content} className="ml-4" />
    </div>
  );
};
