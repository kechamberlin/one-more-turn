import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

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
