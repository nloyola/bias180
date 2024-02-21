import type { CollectionConfig } from 'payload/types';
import formatSlug from '../utilities/formatSlug';
import { ApproachBlock } from './blocks/approach-block';
import { BannerTextBlock } from './blocks/banner-text-block';
import { BoardMembersBlock } from './blocks/board-members-block';
import { BulletListBlock } from './blocks/bullet-list-block';
import { ContactDetailsBlock } from './blocks/contact-details';
import { GradientQuotesBlock } from './blocks/gradient-quotes-block';
import { ImageQuotesBlock } from './blocks/image-quotes-block';
import { TextBlock } from './blocks/text-block';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      unique: true,
      defaultValue: 'page-slug-change-me',
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
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
        ContactDetailsBlock,
      ],
    },
  ],
};

export default Pages;
