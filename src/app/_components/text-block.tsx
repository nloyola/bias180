import React from 'react';
import { TextBlock } from '../../payload-types';
import { RichText } from './RichText';
import { CenteredBlock } from './centered-block';

export const TextBlockComponent: React.FC<{ block: TextBlock }> = ({ block }) => {
  return (
    <CenteredBlock className="m-auto md:py-40">
      <RichText content={block.content} className="grid" />
    </CenteredBlock>
  );
};
