import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

export default function DistrictPage({ data: { district } }) {
  return (
    <>
      <SEO title={district.name} image={district.image?.asset?.fluid?.src} />
      <div className="center">
        <h2>
          <span className="mark">{district.name}</span>
        </h2>
        <Img fluid={district.image.asset.fluid} />
        <p>{district.description}</p>
        <h2>Effects</h2>
        <ul>
          {district.adjacency.map((bonus) => (
            <li key={bonus.id}>{bonus}</li>
          ))}
        </ul>
      </div>
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
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
