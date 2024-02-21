import type { Block } from 'payload/types';

export const ContactDetails: Block = {
  slug: 'ContactDetails',
  imageAltText: 'The contact information',
  interfaceName: 'ContactDetailsBlock',
  labels: {
    singular: 'Contact Details',
    plural: 'Contact Details',
  },
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'street',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'province',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      required: true,
    },
    {
      name: 'postalCode',
      type: 'text',
      required: true,
    },
  ],
};
