import { cn } from '../_lib/utils';
import { BannerTextBlock } from '../_model/banner-text';
import React from 'react';
import { FieldChildrenComponent } from './field-children';

export const BannerTextBlockComponent: React.FC<{ block: BannerTextBlock }> = ({ block }) => {
  let style = {};
  if (block.bannerImage) {
    style = { ...style, backgroundImage: `url("${block.bannerImage.url}")` };
  }

  return (
    <>
      {block.bannerImage && (
        <div className={cn('my-4 flex min-h-full min-w-full justify-center bg-cover bg-bottom')} style={style}>
          <p className="h-[150px] md:h-[300px]"></p>
        </div>
      )}
      <div className="container px-6 md:px-20">
        <h1 className="py-4 text-3xl font-bold">{block.header}</h1>
        {block.content.map((child, index) => (
          <div key={index} className="py-4">
            <FieldChildrenComponent fieldChildren={child} />
          </div>
        ))}
      </div>
    </>
  );
};
