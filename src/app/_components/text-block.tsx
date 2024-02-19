import { TextBlock } from '@app/model/text';
import React from 'react';
import { FieldComponent } from './field';

export const TextBlockComponent: React.FC<{ block: TextBlock }> = ({ block }) => {
  return (
    <div className="px-6 md:px-20">
      <h1 className="py-4 text-3xl font-bold">{block.header}</h1>
      {block.content.map((field, index) => (
        <p key={index} className="py-4">
          <FieldComponent field={field} />
        </p>
      ))}
    </div>
  );
};
