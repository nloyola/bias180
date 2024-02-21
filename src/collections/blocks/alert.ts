import type { Block } from 'payload/types';

const Alert: Block = {
  slug: 'Alert',
  imageAltText: 'A message in an alert box',
  interfaceName: 'AlertBlock',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        {
          value: 'info',
          label: 'Info',
        },
        {
          value: 'success',
          label: 'Success',
        },
        {
          value: 'warning',
          label: 'Warning',
        },
        {
          value: 'danger',
          label: 'Danger',
        },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
    },
  ],
};
export default Alert;
