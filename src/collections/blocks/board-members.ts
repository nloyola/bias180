import type { Block } from 'payload/types';

export const BoardMembers: Block = {
  slug: 'BoardMembers',
  imageAltText: 'The list of board members',
  interfaceName: 'BoardMembersBlock',
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
    },
    {
      name: 'members',
      type: 'array',
      label: 'Members',
      minRows: 2,
      maxRows: 10,
      interfaceName: 'BoardMembers',
      labels: {
        singular: 'Member',
        plural: 'Members',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          type: 'richText',
          required: true,
        },
      ],
    },
  ],
};
