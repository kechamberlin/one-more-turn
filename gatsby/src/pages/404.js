import React from 'react';
import styled from 'styled-components';

const FourOhFourStyles = styled.div`
  text-align: center;
`;

export default function FourOhFourPage() {
  return (
    <FourOhFourStyles>
      <h1>Error 404</h1>
      <p>Looks like Barbarians pillaged this page.</p>
    </FourOhFourStyles>
  );
}
