import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  margin-bottom: 1.75rem;
  .logo {
    transform: translateY(-15%);
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -4rem;
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
    /* &[aria-current='page'] {
      color: var(--red);
    } */
  }
  @media (max-width: 600px) {
    --columns: 4;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }
    .logo {
      transform: none;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li className="logo-item">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/civilizations">Civilizations</Link>
        </li>
        <li>
          <Link to="/districts">Districts</Link>
        </li>
        <li>
          <Link to="/wishlist">Wish List</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
