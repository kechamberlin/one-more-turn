import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `One More Turn`,
    // siteUrl: 'https://onemoreturn.project.com',
    description: 'A Civilization 6 gameplay tracker',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // This is the name of the added plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ju3mdkg6',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
