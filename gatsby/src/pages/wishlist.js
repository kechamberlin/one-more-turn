import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import WishListStyles from '../styles/WishListStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import useCivilization from '../utils/useCivilization';

export default function WishListPage() {
  return (
    <>
      <SEO title="Your Civ List" />
      <p>Wish List Page</p>
    </>
  );
}

export const query = graphql`
  query {
    civilizations: allSanityCivilization {
      nodes {
        id
        name
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
        victories {
          name
          id
        }
      }
    }
  }
`;
