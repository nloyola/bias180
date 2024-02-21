import type { Block } from 'payload/types';

export const BannerText: Block = {
  slug: 'BannerText',
  imageAltText: 'An image banner with a block of text',
  interfaceName: 'BannerTextBlock',
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
};
