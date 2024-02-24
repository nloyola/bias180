import React from 'react';
import { BulletListBlock } from '../../payload-types';
import { RichText } from './RichText';
import { Heading } from './heading';
import { CenteredBlock } from './centered-block';

export const BulletListBlockComponent: React.FC<{ block: BulletListBlock }> = ({ block }) => {
  return (
    <CenteredBlock>
      <Heading label={block.header} />
      <RichText content={block.content} className="ml-4" />
    </CenteredBlock>
  );
};
