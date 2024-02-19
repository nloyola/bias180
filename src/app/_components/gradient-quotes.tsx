import { cn } from '../_lib/utils';
import { ListField, ListItemField } from '@/model/field';
import { GradientQuotesBlock } from '@/model/gradient-quotes';
import React from 'react';

const classes =
  'bg-bias-vert flex min-h-full min-w-full justify-center bg-gradient-to-r bg-cover bg-fixed bg-scroll bg-center';
const quoteClasses = 'bg-gray-700/80 px-4 py-2 font-semibold';

const Quote: React.FC<{ item: ListItemField; index: number }> = ({ item, index }) => {
  if (!('type' in item) || item.type !== 'li') {
    throw new Error('invalid list type');
  }

  return (
    <>
      {item.children.map((item) => {
        return (
          <p key={index} className={cn(quoteClasses, { ' md:row-span-2': index === 2, 'md:col-span-2': index === 3 })}>
            {item.text}
            <span className="pl-1 align-top text-xs">{index + 1}</span>
          </p>
        );
      })}
    </>
  );
};

const Quotes: React.FC<{ quotes: ListField }> = ({ quotes }) => {
  if (!('type' in quotes) || (quotes.type !== 'ol' && quotes.type !== 'ul')) {
    throw new Error('invalid quotes type');
  }

  return (
    <>
      {quotes.children.map((quote, index) => {
        return <Quote key={index} item={quote as ListItemField} index={index} />;
      })}
    </>
  );
};

export const GradientQuotesBlockComponent: React.FC<{ block: GradientQuotesBlock }> = ({ block }) => {
  let gradient = '';
  if (block.gradient === 'gradient-1') {
    gradient = 'from-blue-400/50 to-blue-500/80 ';
  }

  return (
    <div className={cn(classes, gradient)}>
      <div className="container text-white">
        <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-3">
          {block.content.map((list, index) => (
            <Quotes key={index} quotes={list as ListField} />
          ))}
        </div>
        <p className="p-4 text-xs text-white">{block.sources}</p>
      </div>
    </div>
  );
};
