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
  margin-top: 5rem;
`;

const DistrictStyles = styled.div`
  a {
    text-decoration: none;
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
          <DistrictStyles key={district.id}>
            <Link to={`/district/${district.slug.current}`}>
              <Img fluid={district.image.asset.fluid} />
              <h1 className="center">
                <span>{district.name}</span>
              </h1>
            </Link>
          </DistrictStyles>
        ))}
      </DistrictGrid>
    </>
  );
}

export const query = graphql`
  query($skip: Int! = 0, $pageSize: Int! = 3) {
    districts: allSanityDistrict(
      limit: $pageSize
      skip: $skip
      sort: { order: ASC, fields: name }
    ) {
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
