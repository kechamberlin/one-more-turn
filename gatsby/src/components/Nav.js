import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
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
    </nav>
  );
}
