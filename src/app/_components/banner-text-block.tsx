import React from 'react';
import { BannerTextBlock, Media } from '../../payload-types';
import { cn } from '../_lib/utils';
import { RichText } from './RichText';

export const BannerTextBlockComponent: React.FC<{ block: BannerTextBlock }> = ({ block }) => {
  let style = {};
  if (block.bannerImage) {
    const media = block.bannerImage as Media;
    style = { ...style, backgroundImage: `url("${media.url}")` };
  }

  return (
    <>
      {block.bannerImage && (
        <div className={cn('my-4 flex min-h-full min-w-full justify-center bg-cover bg-bottom')} style={style}>
          <p className="h-[150px] md:h-[300px]"></p>
        </div>
      )}
      <div className="container py-6">
        <h1 className="py-4 text-3xl font-bold">{block.header}</h1>
        <RichText content={block.content} className="grid pb-10" />
      </div>
    </>
  );
};
