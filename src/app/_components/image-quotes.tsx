import React from 'react';
import { ImageQuotesBlock, Media } from '../../payload-types';
import { cn } from '../_lib/utils';
import { CenteredBlock } from './centered-block';

const quoteBaseCss = 'mt-10 bg-cyan-950/70 p-4 font-bold text-white md:ml-10 md:w-[35rem]';

const Quote: React.FC<{ item: any; index: number }> = ({ item, index }) => {
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

const Quotes: React.FC<{ quotes: any }> = ({ quotes }) => {
  if (!('type' in quotes) || (quotes.type !== 'ol' && quotes.type !== 'ul')) {
    throw new Error('invalid quotes type');
  }

  return (
    <>
      {quotes.children.map((quote, index) => {
        return <Quote key={index} item={quote} index={index} />;
      })}
    </>
  );
};

export const ImageQuotesBlockComponent: React.FC<{ block: ImageQuotesBlock }> = ({ block }) => {
  let style = {};
  if (block.backgroundImage) {
    const media = block.backgroundImage as Media;
    style = { ...style, backgroundImage: `url("${media.url}")` };
  }

  return (
    <div className={cn('my-4 flex min-h-full min-w-full justify-center bg-cover bg-bottom')} style={style}>
      <CenteredBlock className="flex flex-col justify-center gap-4">
        {block.content.map((list, index) => (
          <Quotes key={index} quotes={list} />
        ))}
        <p className="p-4 text-xs font-semibold text-white">{block.sources}</p>
      </CenteredBlock>
    </div>
  );
};
