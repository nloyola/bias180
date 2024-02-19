import { cn } from '../_lib/utils';
import { ListField, ListItemField } from '@/model/field';
import { ImageQuotesBlock } from '@app/model/image-quotes';
import React from 'react';

const quoteBaseCss = 'mt-10 bg-cyan-950/70 p-4 font-bold text-white md:ml-10 md:w-[35rem]';

const Quote: React.FC<{ item: ListItemField; index: number }> = ({ item, index }) => {
  if (!('type' in item) || item.type !== 'li') {
    throw new Error('invalid list type');
  }

  return (
    <>
      {item.children.map((item) => {
        return (
          <p key={index} className={cn(quoteBaseCss, { 'self-start': index % 2 }, { 'self-end': index % 2 === 1 })}>
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

export const ImageQuotesBlockComponent: React.FC<{ block: ImageQuotesBlock }> = ({ block }) => {
  let style = {};
  if (block.backgroundImage) {
    style = { ...style, backgroundImage: `url("${block.backgroundImage.url}")` };
  }

  return (
    <div className={cn('my-4 flex min-h-full min-w-full justify-center bg-cover bg-bottom')} style={style}>
      <div className="container flex flex-col justify-center gap-4">
        {block.content.map((list, index) => (
          <Quotes key={index} quotes={list as ListField} />
        ))}
        <p className="p-4 text-xs text-white">{block.sources}</p>
      </div>
    </div>
  );
};
