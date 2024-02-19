import { CollectionConfig } from 'payload/types';
import Quote from './blocks/quote';
import Content from './blocks/content';
import Alert from './blocks/alert';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
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
          name: 'slug',
          type: 'text',
          unique: true,
          defaultValue: 'post-slug-change-me',
          minLength: 10
        },
        {
          name: 'published_date',
          type: 'date',
          defaultValue: () => new Date()
        },
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
      name: 'title',
      type: 'text',
      required: true
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
              blocks: [Quote, Content, Alert]
            }
          ]
        }
      ]
    }
    // add sidebar fields here
  ]
};
export default Posts;
