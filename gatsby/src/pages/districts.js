import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const DistrictGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const DistrictStyles = styled.div`
  a {
    text-decoration: none;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    transform: rotate(1deg);
    text-align: center;
  }
`;

export default function DistrictsPage({ data, pageContext }) {
  const districts = data.districts.nodes;
  return (
    <>
      <SEO title={`Districts - Page ${pageContext.currentPage || 1}`} />
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.districts.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/districts"
      />
      <DistrictGrid>
        {districts.map((district) => (
          <DistrictStyles>
            <Link to={`/district/${district.slug.current}`}>
              <h2>
                <span className="mark">{district.name}</span>
              </h2>
            </Link>
            <Img fluid={district.image.asset.fluid} />
            <p className="description">{district.description}</p>
          </DistrictStyles>
        ))}
      </DistrictGrid>
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
