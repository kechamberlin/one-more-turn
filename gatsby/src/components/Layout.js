import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
