import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import WishListStyles from '../styles/WishListStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import useCivilization from '../utils/useCivilization';
import CivilizationWishList from '../components/CivilizationWishList';

export default function WishListPage({ data }) {
  const civs = data.civilizations.nodes;
  const { order, addToOrder, removeFromOrder } = useCivilization({ civs });
  return (
    <>
      <SEO title="Your Civ List" />
      <WishListStyles>
        <fieldset className="menu">
          <legend>Civilizations</legend>
          {civs
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((civ) => (
              <MenuItemStyles key={civ.id}>
                <Img
                  width="25"
                  height="25"
                  fluid={civ.image.asset.fluid}
                  alt={civ.name}
                />

                <h2 className="wishlist-civ-name">{civ.name}</h2>

                <div className="button-grid">
                  {[
                    'Cultural',
                    'Diplomatic',
                    'Domination',
                    'Religious',
                    'Scientific',
                  ].map((win) => (
                    <button
                      className="wishlist-button-style"
                      type="button"
                      key={win}
                      title={`Add ${civ.name}'s ${win} Victory to Wish List`}
                      onClick={() =>
                        addToOrder({
                          id: civ.id,
                          win,
                        })
                      }
                    >
                      {win}
                    </button>
                  ))}
                </div>
              </MenuItemStyles>
            ))}
        </fieldset>
        <fieldset className="order">
          <legend>Wish List</legend>
          <CivilizationWishList
            order={order}
            removeFromOrder={removeFromOrder}
            civilizations={civs}
          />
        </fieldset>
      </WishListStyles>
    </>
  );
}

export const query = graphql`
  query {
    civilizations: allSanityCivilization {
      nodes {
        id
        name
        slug {
          current
        }
        image {
          asset {
            fixed(width: 100, height: 100) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 50) {
              ...GatsbySanityImageFluid
            }
          }
        }
        victories {
          name
          id
        }
      }
    }
  }
`;
