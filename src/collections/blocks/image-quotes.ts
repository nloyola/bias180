import type { Block } from 'payload/types';

export const ImageQuotes: Block = {
  slug: 'ImageQuotes',
  imageAltText: 'Quotes displayed in front of an image',
  interfaceName: 'ImageQuotesBlock',
  labels: {
    singular: 'Image Quotes',
    plural: 'Image Quotes',
  },
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'sources',
      type: 'text',
      required: true,
    },
  ],
};
