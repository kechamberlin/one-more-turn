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
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function SingleCiv({ civ }) {
  return (
    <CivStyles>
      <Link to={`/civilization/${civ.slug.current}`}>
        <h2>
          <Img fixed={civ.image.asset.fixed} alt={civ.name} />
          <span className="mark">{civ.name}</span>
        </h2>
      </Link>

      <p>{civ.victories.map((victory) => victory.name).join(', ')}</p>
      <p>{civ.leaders.map((leader) => leader.leader).join(', ')}</p>
      <div>
        {civ.leaders.map((portrait) => (
          <Img
            key={portrait.id}
            fixed={portrait.image.asset.fixed}
            alt={civ.name}
          />
        ))}
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
