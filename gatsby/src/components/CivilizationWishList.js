import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';

export default function CivilizationWishList({
  order,
  civilizations,
  removeFromOrder,
}) {
  return (
    <>
      {order.length === 0 && <h2>Your Wish List is Empty</h2>}
      {order.map((singleOrder, index) => {
        const civilization = civilizations.find(
          (civ) => civ.id === singleOrder.id
        );
        return (
          <MenuItemStyles key={`${singleOrder.id}-${index}`}>
            <Img fluid={civilization.image.asset.fluid} />
            <h2>{civilization.name}</h2>
            <p>
              {singleOrder.win}
              <button
                type="button"
                className="remove"
                title={`Remove ${civilization.name}'s ${singleOrder.win} Victory from Wish List`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
