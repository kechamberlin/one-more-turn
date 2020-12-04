import { GiLaurelsTrophy as icon } from 'react-icons/gi';

export default {
  // Computer Name
  name: 'victory',
  // Visible Title
  title: 'Victories',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'name',
      title: 'Victory Type',
      type: 'string',
      description: 'Name of the Victory Type',
    },
    {
      name: 'cultural',
      title: 'Cultural Victory',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      cultural: 'cultural',
    },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.cultural ? '🎵' : ''} `,
    }),
  },
};
