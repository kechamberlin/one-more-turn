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
    <>
      <p>{civ.newCivs.map((test) => test.name)}</p>

      <p>
        {civ.newCivs.map((leader) =>
          leader.leaders.map((person) => person.leader)
        )}
      </p>

      {civ.newCivs.map((leader) =>
        leader.leaders.map((person) => <Img fixed={person.image.asset.fixed} />)
      )}

      {civ.newCivs.map((photo) => (
        <Img fixed={photo.image.asset.fixed} />
      ))}
    </>
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
