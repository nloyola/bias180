import type { Block } from 'payload/types';

export const BulletList: Block = {
  slug: 'BulletList',
  imageAltText: 'A list with a heading',
  interfaceName: 'BulletListBlock',
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
};
