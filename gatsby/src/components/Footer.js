import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

export default function Footer() {
  return (
    <footer>
      <p>&copy; One More Turn {new Date().getFullYear()} </p>
    </footer>
  );
}
