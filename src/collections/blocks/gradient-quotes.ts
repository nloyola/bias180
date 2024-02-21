import type { Block } from 'payload/types';

export const GradientQuotes: Block = {
  slug: 'GradientQuotes',
  imageAltText: 'Quotes displayed in front of an gradient',
  interfaceName: 'GradientQuotesBlock',
  labels: {
    singular: 'Gradient Quotes',
    plural: 'Gradient Quotes',
  },
  fields: [
    {
      name: 'gradient',
      type: 'select',
      hasMany: false,
      options: [
        {
          label: '-- None -',
          value: 'none',
        },
        {
          label: 'Gradient 1',
          value: 'gradient-1',
        },
        {
          label: 'Gradient 2',
          value: 'gradient-2',
        },
      ],
      defaultValue: 'none',
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
