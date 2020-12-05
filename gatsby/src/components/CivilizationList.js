import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

// Whole Page Styling
const CivGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  // ** Adjust following as needed: **
  grid-auto-rows: auto auto auto auto;
`;

// Single Civ Styling
const CivStyles = styled.div`
  display: grid;
  /* Take your row sizing not from the pizzaStyles div, but from the  PizzaGridStyles grid */
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
  //   console.log(civ);

  // Returns an array of victory names:
  // ["Cultural", "Diplomatic", "Domination"]
  // ["Scientific"]
  // ["Domination", "Religious"]
  //   console.log(civ.victories.map((victory) => victory.name));

  //   console.log(civ.leaders.map((leader) => leader.image));

  //   console.log(
  //     Object.values(civ.leaders.map((portrait) => portrait.image.asset.fixed))
  //   );

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

      <Img fixed={civ.leaders[0].image.asset.fixed} alt={civ.name} />

      {/* <Img
          fixed={Object.values(
            civ.leaders.map((portrait) => portrait.image.asset.fixed)
          )}
          alt={civ.leaders.name}
        /> */}
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
