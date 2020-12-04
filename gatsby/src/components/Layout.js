import React from 'react';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
