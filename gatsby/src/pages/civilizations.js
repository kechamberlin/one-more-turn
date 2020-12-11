import React from 'react';
import { graphql } from 'gatsby';
import CivilizationList from '../components/CivilizationList';
import VictoriesFilter from '../components/VictoriesFilter';
import SEO from '../components/SEO';

export default function CivilizationsPage({ data, pageContext }) {
  const civs = data.civilizations.nodes;
  return (
    <>
      <SEO
        title={
          pageContext.victory ? `${pageContext.victory} Victory` : `All Civs`
        }
      />
      {/* <p>Civilizations Page</p> */}
      <VictoriesFilter activeVictory={pageContext.victory} />
      <CivilizationList civs={civs} />
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
