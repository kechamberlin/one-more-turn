import { CgShapeHexagon as icon } from 'react-icons/cg';

export default {
  // Computer Name
  name: 'district',
  // Visible Title
  title: 'Districts',
  type: 'document',
  icon: icon,
  fields: [
    {
      name: 'name',
      title: 'District',
      type: 'string',
      description: 'Name of the District',
    },
    {
      name: 'image',
      title: 'District Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the District',
    },
    {
      name: 'adjacency',
      title: 'Adjacency Bonuses and Effects',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'description',
    },
    prepare: ({ title, media, subtitle }) => ({
      title: title,
      media: media,
      subtitle: JSON.stringify(subtitle),
    }),
  },
};
