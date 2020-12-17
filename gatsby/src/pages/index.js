import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import NewList from '../components/NewList';

export default function HomePage({ data }) {
  const newCivs = data.new.nodes;
  return (
    <>
      <p>Home Page</p>
      <p>This is another element</p>
    </>
  );
}

export const query = graphql`
  query MyQuery {
    new: allSanityNew {
      nodes {
        newCivs {
          name
          image {
            asset {
              fixed(width: 100, height: 100) {
                ...GatsbySanityImageFixed
              }
              fluid(maxWidth: 10) {
                ...GatsbySanityImageFluid
              }
            }
          }
          leaders {
            id
            leader
            image {
              asset {
                fixed(width: 100, height: 100) {
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
    }
  }
`;
