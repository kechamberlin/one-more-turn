import { MdStar as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'civilization',
  // Visible Title
  title: 'Civilizations',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Civilization Name',
      type: 'string',
      description: 'Name of the Civilization',
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
      name: 'image',
      title: 'Civilization Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ability',
      title: 'Civ Ability',
      type: 'string',
      description: 'Civ Ability Name',
    },
    {
      name: 'description',
      title: 'Ability Description',
      type: 'text',
      description: 'Civ Ability Description',
    },
    {
      name: 'victories',
      title: 'Victories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'victory' }] }],
    },
    {
      name: 'leaders',
      title: 'Leader(s)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'leader' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      victory0: 'victories.0.name',
      victory1: 'victories.1.name',
      victory2: 'victories.2.name',
      victory3: 'victories.3.name',
      victory4: 'victories.4.name',
      leader0: 'leaders.0.leader',
      leader1: 'leaders.1.leader',
    },
    // TODO: add ...leaders to prepare after ...victories
    prepare: ({ title, media, leader0, leader1, ...victories }) => {
      // 1. Filter undefined victories/leaders out
      const vics = Object.values(victories).filter(Boolean);
      // TODO: const leads = Object.values(leaders).filter(Boolean);
      // 2. Return the preview object for the civilization
      return {
        title,
        media,
        leader0,
        leader1,
        subtitle: vics.join(', '),
      };
    },
  },
};
