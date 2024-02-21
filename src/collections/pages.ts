import type { CollectionConfig } from 'payload/types';
import { Approach } from './blocks/approach';
import formatSlug from '../utilities/formatSlug';
import { Text } from './blocks/text';
import { BoardMembers } from './blocks/board-members';
import { BannerText } from './blocks/banner-text';
import { BulletList } from './blocks/bullet-list';
import { GradientQuotes } from './blocks/gradient-quotes';
import { ImageQuotes } from './blocks/image-quotes';
import { ContactDetails } from './blocks/contact-details';

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
      blocks: [Text, Approach, BoardMembers, BannerText, BulletList, GradientQuotes, ImageQuotes, ContactDetails],
    },
  ],
};

export default Pages;
