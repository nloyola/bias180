import React, { Fragment } from 'react'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '../getPayload'
import { Page } from './../payload-types'
import { BannerTextBlockComponent } from './_components/banner-text-block';
import { BoardBlockComponent } from './_components/board';
import { BulletListBlockComponent } from './_components/bullet-list';
import { ContactUsBlockComponent } from './_components/contact-us-block';
import { GradientQuotesBlockComponent } from './_components/gradient-quotes';
import { ImageQuotesBlockComponent } from './_components/image-quotes';
import { TextBlockComponent } from './_components/text-block';
import { ApproachBlockComponent } from './_components/approach-block';

export default async function Home() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'bias180',
      },
    },
  })

  const home = docs?.[0] as Page

  if (!home) {
    return notFound()
  }

  console.log(home);

  return (
    <>
      {home.layout.map((block) => {
        switch (block.blockType) {
          case 'BannerText':
            return <BannerTextBlockComponent key={block.id} block={block} />;

          case 'ImageQuotes':
            return <ImageQuotesBlockComponent key={block.id} block={block} />;

          case 'BulletList':
            return <BulletListBlockComponent key={block.id} block={block} />;

          case 'GradientQuotes':
            return <GradientQuotesBlockComponent key={block.id} block={block} />;

          case 'Text':
            return <TextBlockComponent key={block.id} block={block} />;

          case 'Approach':
            return <ApproachBlockComponent key={block.id} block={block} />;

          case 'Board':
            return <BoardBlockComponent key={block.id} block={block} />;

          case 'ContactDetails':
            return <ContactUsBlockComponent key={block.id} block={block} />;

          default:
            //return <pre>{JSON.stringify(block, null, 2)}</pre>;
            throw new Error('invalid block type: ' + block);
        }
      })}
    </>
  )
}
