import React from 'react';
import Img from 'gatsby-image';

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
