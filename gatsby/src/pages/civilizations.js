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
      <VictoriesFilter activeVictory={pageContext.victory} />
      <CivilizationList
        civs={civs.sort((a, b) => a.name.localeCompare(b.name))}
      />
    </>
  );
}

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
          intro
          leader
          image {
            asset {
              fixed(height: 165, width: 165) {
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
            fixed(width: 50, height: 50) {
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
