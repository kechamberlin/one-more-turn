import styled from 'styled-components';

const WishListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldset {
    display: grid;
    gap: 1rem;
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;

    .button-grid {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 0.5rem;
    }
    label + label {
      margin-top: 1rem;
    }
    align-content: start;

    &.order,
    &.menu {
      grid-column: span 1;
      /* Chrome is weird about Grid and fieldsets, so we add a fixed height to fix it :)  */
      height: 600px;
    }
  }
  .wishlist-button-style {
    background: #dda832;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.2);
    color: #232323;
    border: 3px solid #dda833;
    // border-radius: 8px;
    transition: all 0.2s;
    &:hover {
      background: #8a3100;
      border-color: #8a3100;
      color: #dbdce1;
      transition-duration: 0.25s;
      box-shadow: inset 0 0 0 2px hsla(0, 0%, 100%, 0.2);
    }
  }
  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;

export default WishListStyles;
