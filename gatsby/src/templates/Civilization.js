import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const CivilizationGrid = styled.div`
  margin-bottom: 10rem;
  padding: 2rem;
  h1 {
    margin-bottom: 1rem;
  }
  .leader-style {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0 2rem;
    margin-top: 1rem;
    align-items: center;
  }
  @media (max-width: 941px) {
    display: block;
    font-size: 1.5rem;
    h1 {
      font-size: 2.5rem;
    }
    .leader-style {
      display: block;
      text-align: center;
    }
  }
`;

`;

export default function SingleCivPage({ data }) {
  const { civilization } = data;
  return (
    <>
      <SEO
        title={civilization.name}
        image={civilization.image?.asset?.fluid?.src}
      />
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
      ability
      description
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
      leaders {
        id
        intro
        leader
        bonus
        description
        image {
          asset {
            fixed(height: 250, width: 250) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
