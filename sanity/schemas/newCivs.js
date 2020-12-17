import { MdStore as icon } from 'react-icons/md';

export default {
  // Computer Name
  name: 'new',
  // Visible Title
  title: 'Newest Civs',
  type: 'document',
  icon,
  fields: [
    {
      name: 'newCivs',
      title: 'Newest Civilization',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'civilization' }] }],
    },
  ],
};
