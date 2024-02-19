import { Block, CollectionConfig } from 'payload/types';
import { TextBlock } from './blocks/text-block';
import { BannerTextBlock } from './blocks/banner-text-block';
import { BulletListBlock } from './blocks/bullet-list-block';
import { ImageQuotesBlock } from './blocks/image-quotes-block';
import { GradientQuotesBlock } from './blocks/gradient-quotes-block';
import { ApproachBlock } from './blocks/approach-block';
import { BoardMembersBlock } from './blocks/board-members-block';
import { ContactDetailsBlock } from './blocks/contact-details';
import formatSlug from '../utilities/formatSlug'

const QuoteBlock: Block = {
  slug: 'Quote', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'QuoteBlock', // optional
  fields: [
    // required
    {
      name: 'quoteHeader',
      type: 'text',
      required: true
    },
    {
      name: 'quoteText',
      type: 'text'
    }
  ]
};

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'layout',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [
        TextBlock,
        ApproachBlock,
        BoardMembersBlock,
        BannerTextBlock,
        BulletListBlock,
        GradientQuotesBlock,
        ImageQuotesBlock,
        ContactDetailsBlock
      ]
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    }
  ]
};

export default Pages;
