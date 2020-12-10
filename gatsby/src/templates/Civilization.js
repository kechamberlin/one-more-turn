import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const CivilizationGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SingleCivPage({ data }) {
  const { civilization } = data;
  return (
    <>
      <SEO title={civilization.name} />
      <CivilizationGrid>
        <Img fluid={civilization.image.asset.fluid} />
        <div>
          <h2 className="mark">{civilization.name}</h2>
          <ul>
            {civilization.victories.map((victory) => (
              <li key={victory.id}>{victory.name}</li>
            ))}
          </ul>
        </div>
      </CivilizationGrid>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.
export const query = graphql`
  query($slug: String!) {
    civilization: sanityCivilization(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 200) {
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
`;
