import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <p>&copy; One More Turn {new Date().getFullYear()} </p>
      <p>
        API Data Provided by{' '}
        <a href="https://rawg.io/" rel="noreferrer" target="_blank">
          RAWG Video Games Database
        </a>
      </p>
    </FooterStyle>
  );
}
