import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import NewList from '../components/NewList';
import { HomePageIntroStyle, HomePageGrid } from '../styles/HomeGrids';
import Loading from '../components/Loading';

export default function HomePage({ data }) {
  const newCivs = data.new.nodes;
  return (
    <>
      <SEO title="Home" />
      <NewList civs={newCivs} />
    </>
  );
}

export const query = graphql`
  query MyQuery {
    new: allSanityNew {
      nodes {
        newCivs {
          id
          name
          image {
            asset {
              fixed(width: 150, height: 150) {
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
                id
                fixed(width: 124, height: 124) {
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
    }
  }
`;
