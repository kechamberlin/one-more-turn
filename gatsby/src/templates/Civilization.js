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

const CivHeader = styled.div`
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
  padding: 2rem;
`;

const CivLeader = styled.div`
  padding: 2rem;
  align-content: middle;
`;

const CivFeatures = styled.div`
  h1 {
    text-decoration: underline;
    text-underline-offset: 0.2rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }
  padding: 2rem;
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
        <CivHeader className="center">
          <h1>{civilization.name}</h1>
          <span>
            {civilization.victories.map((victory) => victory.name).join(', ')}
          </span>
        </CivHeader>

        <CivLeader>
          {civilization.leaders.map((leader) => (
            <div className="leader-style" key={leader.id}>
              <Img fluid={leader.image.asset.fluid} />
              <div>
                <h1>{leader.leader}</h1>
                <p>{leader.intro}</p>
              </div>
            </div>
          ))}
        </CivLeader>

        <CivFeatures>
          <h1>Features &amp; Abilities</h1>
          <div>
            {civilization.leaders.map((leader) => (
              <div key={leader.id}>
                <h2>{leader.bonus}</h2>
                <p>{leader.description}</p>
              </div>
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
