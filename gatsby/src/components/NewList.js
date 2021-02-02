import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const NewCivGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  @media (max-width: 425px) {
    display: block;
    .single-new-civ {
      margin-bottom: 3rem;
    }
  }
`;

function NewCiv({ civ }) {
  return (
    <NewCivGrid>
      {civ.newCivs.map((civilization) => (
        <div key={civilization.id}>
          {civilization.leaders.map((person) => (
            <div key={civilization.id} className="single-new-civ">
              <Img
                key={person.id}
                fluid={person.image.asset.fluid}
                alt={person.leader}
              />
              <h3 key={civilization.id}>{civilization.name}</h3>
            </div>
          ))}
        </div>
      ))}
    </NewCivGrid>
  );
}

export default function NewList({ civs }) {
  return (
    <>
      {civs.map((civ) => (
        <NewCiv civ={civ} />
      ))}
    </>
  );
}
