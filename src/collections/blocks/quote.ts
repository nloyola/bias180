import type { Block } from 'payload/types';

const Quote: Block = {
  slug: 'Quote',
  imageAltText: 'Quote block',
  interfaceName: 'QuoteBlock',
  fields: [
    {
      name: 'quote',
      type: 'textarea',
    },
    {
      name: 'author',
      type: 'text',
    },
  ],
};
export default Quote;
