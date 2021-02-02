import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const VictoriesStyles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    text-decoration: none;
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);
    &[aria-current='page'] {
      background: var(--all);
    }
    .count {
      background: white;
      padding: 2px 5px;
    }
    &.domination {
      background: var(--red);
    }
    &.cultural {
      background: var(--purple);
    }
    &.religious {
      background: var(--greyblue);
    }
    &.scientific {
      background: var(--blue);
    }
    &.diplomatic {
      background: var(--green);
    }
  }
`;

function countCivsinVictories(civs) {
  // Return the civs with counts
  const counts = civs
    .map((civ) => civ.victories)
    .flat()
    .reduce((accumulator, victory) => {
      // Check if this is an existing victory
      const existingVictory = accumulator[victory.id];
      if (existingVictory) {
        // if it is, increment by 1
        existingVictory.count += 1;
      } else {
        // Otherwise create a new entry in our accumulator and set it to one
        accumulator[victory.id] = {
          id: victory.id,
          name: victory.name,
          count: 1,
        };
      }

      return accumulator;
    }, {});
  // sort them based on their count
  const sortedVictories = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedVictories;
}

export default function VictoriesFilter({ activeVictory }) {
  // Get a list of all the Victories
  // Get a list of all the Civilizations with their Victories

  const { victories, civilizations } = useStaticQuery(graphql`
    query {
      victories: allSanityVictory {
        nodes {
          name
          id
          cultural
        }
      }
      civilizations: allSanityCivilization {
        nodes {
          victories {
            name
            id
          }
        }
      }
    }
  `);
  console.clear();
  // Count how many civs are in each victory type
  const victoriesWithCounts = countCivsinVictories(civilizations.nodes);
  console.log(victoriesWithCounts);
  // Loop over the list of victories and display the victory and the count of civs in that victory

  return (
    <VictoriesStyles>
      <Link to="/civilizations">
        <span>All</span>
        <span className="count">{civilizations.nodes.length}</span>
      </Link>
      {/* <p>VICTORIES</p> */}
      {victoriesWithCounts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((victory) => (
          <Link
            key={victory.id}
            to={`/victory/${victory.name}`}
            className={
              victory.name === activeVictory && victory.name === 'Domination'
                ? 'domination'
                : victory.name === activeVictory && victory.name === 'Cultural'
                ? 'cultural'
                : victory.name === activeVictory && victory.name === 'Religious'
                ? 'religious'
                : victory.name === activeVictory &&
                  victory.name === 'Scientific'
                ? 'scientific'
                : victory.name === activeVictory &&
                  victory.name === 'Diplomatic'
                ? 'diplomatic'
                : ''
            }
          >
            <span className="name">{victory.name}</span>
            <span className="count">{victory.count}</span>
          </Link>
        ))}
    </VictoriesStyles>
  );
}
