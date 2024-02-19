import type { CollectionConfig } from 'payload/types';
import Quote from './blocks/quote';
import Content from './blocks/content';
import Alert from './blocks/alert';
import formatSlug from '../utilities/formatSlug';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['slug', 'title', 'author', 'category', 'tags', 'published_date'],
    useAsTitle: 'title'
  },
  access: {
    read: () => true
  },
  versions: {
    maxPerDoc: 10,
    drafts: true
  },
  fields: [
    {
      name: 'postMeta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          minLength: 20,
          maxLength: 100
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          minLength: 40,
          maxLength: 160
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text'
        }
      ]
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      unique: true,
      defaultValue: 'post-slug-change-me',
      minLength: 10,
      hooks: {
        beforeValidate: [formatSlug('title')]
      }
    },
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'published_date',
      type: 'date',
      defaultValue: () => new Date()
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Post Media',
          fields: [
            {
              name: 'postImage',
              type: 'upload',
              relationTo: 'media',
              required: true
            }
          ]
        },
        {
          label: 'Post Layout',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              minRows: 1,
              maxRows: 20,
              blocks: [Quote, Content, Alert]
            }
          ]
        }
      ]
    }
  ]
};
export default Posts;
