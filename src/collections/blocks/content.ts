import type { Block } from 'payload/types';

const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'content',
      type: 'richText'
    }
  ]
};
export default Content;
