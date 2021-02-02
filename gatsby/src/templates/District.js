import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const SingleDistrictGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin-top: 4rem;
  li {
    margin-top: 10px;
    list-style-type: circle;
  }
  li:first-child {
    margin-top: 0;
  }
  .district-name {
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    display: block;
    font-size: 1.35rem;
    h1 {
      font-size: 3rem;
    }
    .district-effect {
      margin-top: 3rem;
    }
  }
  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

export default function DistrictPage({ data: { district } }) {
  return (
    <>
      <SEO title={district.name} image={district.image?.asset?.fluid?.src} />
      <SingleDistrictGrid>
        <div>
          <h1 className="district-name">{district.name}</h1>
          <Img fixed={district.image.asset.fixed} alt={district.name} />
          <p>{district.description}</p>
        </div>

        <div>
          <h1 className="district-effect">Effects</h1>
          <ul style={{ wordBreak: 'break-word' }}>
            {district.adjacency.map((bonus, index) => (
              <li key={`${district.id}-${index}`}>{bonus}</li>
            ))}
          </ul>
        </div>
      </SingleDistrictGrid>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    district: sanityDistrict(slug: { current: { eq: $slug } }) {
      id
      name
      description
      adjacency
      image {
        asset {
          fixed(height: 300, width: 300) {
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
