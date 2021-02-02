import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

// Whole Page Styling
const CivGridStyles = styled.div`
  display: grid;
  // ** NOTE: CAN CHANGE TO minmax(300px (or 250px), 1fr) for showing 3 at a time **
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  @media (max-width: 475px) {
    display: block;
  }
`;

// Single Civ Styling
const CivStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 1;
  grid-gap: 2rem;
  border: 3px solid #dda833;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  .civ-icon {
    border-radius: 50%;
  }
  .civ-title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 2rem;
  }
  @media (max-width: 475px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 375px) {
    .mobile-heading {
      font-size: 3.2rem;
    }
    .mobile-name {
      font-size: 2.5rem;
    }
  }
`;

function SingleCiv({ civ }) {
  return (
    <CivStyles className="center">
      <Link to={`/civilization/${civ.slug.current}`}>
        <div className="civ-title">
          <Img
            className="civ-icon"
            fixed={civ.image.asset.fixed}
            alt={civ.name}
          />
          <h1 className="mobile-heading">{civ.name}</h1>
        </div>
      </Link>

      <div>
        {civ.leaders.map((portrait) => (
          <Img
            key={portrait.id}
            fixed={portrait.image.asset.fixed}
            alt={civ.name}
          />
        ))}
        <h2 className="mobile-name">
          {civ.leaders.map((leader) => leader.leader).join(', ')}
        </h2>
        <h5>{civ.victories.map((victory) => victory.name).join(', ')}</h5>
      </div>
    </CivStyles>
  );
}

export default function CivilizationList({ civs }) {
  return (
    <CivGridStyles>
      {civs.map((civ) => (
        <SingleCiv key={civ.id} civ={civ} />
      ))}
    </CivGridStyles>
  );
}
