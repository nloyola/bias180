import type { Block } from 'payload/types';

export const Approach: Block = {
  slug: 'Approach',
  imageAltText: 'A list of items listing the approaches taken by Bias180',
  interfaceName: 'ApproachBlock',
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Items',
      minRows: 2,
      maxRows: 10,
      interfaceName: 'ApproachItems',
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'header',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};
