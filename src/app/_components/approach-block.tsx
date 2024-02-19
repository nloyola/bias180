'use client';

import React, { ReactNode } from 'react';
import { Heading } from './heading';
import Image from 'next/image';
import { ApproachBlock, Media } from '../../payload-types';

// https://www.geeksforgeeks.org/how-to-create-circle-with-text-in-tailwind-css/

const ApproachItem: React.FC<{ itemNum: number; heading: string; message: ReactNode }> = ({
  itemNum,
  heading,
  message
}) => {
  return (
    <div className="flex gap-2 md:col-span-4">
      <div className="relative grow rounded-lg pt-1 text-center">
        <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-semibold text-gray-700">
          {itemNum}
        </p>
      </div>
      <div>
        <p className="font-bold">{heading}</p>
        <p className="py-4">{message}</p>
      </div>
    </div>
  );
};

// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
export const ApproachBlockComponent: React.FC<{ block: ApproachBlock }> = ({ block }) => {
  const [width, setWidth] = React.useState<number>(undefined);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  let style = {};
  if (block.backgroundImage) {
    const media = block.backgroundImage as Media;
    style = { ...style, backgroundImage: `url("${media.url}")` };
  }

  if (width < breakpoint) {
    return (
      <div className="my-4 flex min-h-full min-w-full justify-center bg-cover bg-scroll bg-center" style={style}>
        <div className="container my-4 text-white">
          <Heading label={block.header} />
          <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-12">
            {block.items.map(({ header, content, icon }, index) => {
              const media = icon as Media;
              return (
                <React.Fragment key={index}>
                  <Image
                    alt="icon"
                    src={media.url}
                    className="m-2 h-20 w-20 place-self-center md:col-span-4"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <ApproachItem itemNum={index + 1} heading={header} message={content} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (block.items.length != 6) {
    throw new Error('invalid number of items in approaces');
  }

  const approachesInRows = [block.items.slice(0, 3), block.items.slice(3, 6)];

  if (block.backgroundImage) {
    const media = block.backgroundImage as Media;
    style = { ...style, backgroundImage: `url("${media.url}")` };
  }

  // render in this alternate way so that list items and paragraphs are top aligned
  return (
    <div className="my-4 flex min-h-full min-w-full justify-center bg-cover bg-scroll bg-center" style={style}>
      <div className="container my-4 text-white">
        <Heading label={block.header} />
        <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-12">
          {approachesInRows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map(({ icon }, index) => {
                const media = icon as Media;
                return (
                  <Image
                    key={3 * rowIndex + index}
                    src={media.url}
                    alt="icon"
                    className="m-2 place-self-center md:col-span-4"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '20%', height: 'auto' }}
                  />
                );
              })}
              {row.map(({ header, content }, index) => (
                <ApproachItem
                  key={30 * rowIndex + index}
                  itemNum={3 * rowIndex + index + 1}
                  heading={header}
                  message={content}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
