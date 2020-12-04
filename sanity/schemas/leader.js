import { GoPerson as icon } from 'react-icons/go';

export default {
  // Computer Name
  name: 'leader',
  // Visible Title
  title: 'Leader(s)',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'leader',
      title: 'Leader',
      type: 'string',
      description: 'Name of the Leader',
    },
    {
      name: 'image',
      title: 'Leader Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'leader',
      media: 'image',
    },
    prepare: ({ title, media }) => ({
      title,
      media,
    }),
  },
};
