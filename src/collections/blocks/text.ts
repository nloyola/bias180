import type { Block } from 'payload/types';

export const Text: Block = {
  slug: 'Text',
  imageAltText: 'A block of text',
  interfaceName: 'TextBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
};
