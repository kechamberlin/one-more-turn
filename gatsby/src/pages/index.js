import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import NewList from '../components/NewList';
import { HomePageIntroStyle, HomePageGrid } from '../styles/HomeGrids';
import Loading from '../components/Loading';

export default function HomePage({ data }) {
  const newCivs = data.new.nodes;

  const [gameInfo, setGameInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchGameInfo();
  }, []);

  const fetchGameInfo = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.rawg.io/api/games/10297?key=${process.env.GATSBY_API_KEY}`
    );
    const gameData = await response.json();
    setGameInfo(gameData);
    setLoading(false);
  };

  return (
    <div className="center">
      <SEO title="Home" />

      <HomePageIntroStyle>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div className="home-image">
              <img src={gameInfo.background_image} alt="official game cover" />
              <div className="image-text">One... More... Turn...</div>
            </div>
            <p>
              Welcome to One More Turn! This app is a gameplay tracker for
              everyone's favorite Strategy game {gameInfo.name}.
            </p>
            <p>
              We have all been there: we click 'Create Game' and suddenly feel
              overwhelmed by the nearly 50 civilizations and their endless
              victory combinations.
            </p>
            <p>
              By using One More Turn, you can easily organize all the
              civilizations you want to play, how you want to play them.
            </p>

            <p>
              For the latest news and updates, visit{' '}
              <a href={gameInfo.website} rel="noreferrer" target="_blank">
                the official website.
              </a>
            </p>
          </div>
        )}
      </HomePageIntroStyle>

      <HomePageGrid>
        <h1>Newest Civilizations</h1>
        <NewList civs={newCivs} />
      </HomePageGrid>
    </div>
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
