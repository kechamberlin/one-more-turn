import React from 'react';
import { graphql } from 'gatsby';
import CivilizationList from '../components/CivilizationList';
import VictoriesFilter from '../components/VictoriesFilter';

export default function CivilizationsPage() {
  return (
    <>
      <p>Civilizations Page</p>
    </>
  );
}

// TODO: after victories, add leaders { id name }
export const query = graphql`
  query($victory: [String]) {
    civilizations: allSanityCivilization(
      filter: { victories: { elemMatch: { name: { in: $victory } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        victories {
          id
          name
        }
        leaders {
          id
          leader
          image {
            asset {
              fixed(height: 100, width: 100) {
                ...GatsbySanityImageFixed
              }
              fluid(maxWidth: 100) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        image {
          asset {
            fixed(width: 65, height: 65) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
