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
  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;

export default WishListStyles;
