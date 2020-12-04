import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';

export default function DistrictsPage() {
  return (
    <>
      <p>Districts Page</p>
    </>
  );
}

export const query = graphql`
  query($skip: Int! = 0, $pageSize: Int! = 3) {
    districts: allSanityDistrict(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        name
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description
        adjacency
      }
    }
  }
`;
