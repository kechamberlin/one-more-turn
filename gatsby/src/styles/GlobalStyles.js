import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/civ-menu.jpg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --white: #fff;
    --grey: #efefef;
    --all: #B8860B;
    --domination: crimson;
    --cultural: #db70d2;
    --religious: #8799b4;
    --scientific: deepskyblue;
    --diplomatic: #2d8d91;
  }
  html {
    background-image: url(${bg});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    font-size: 10px;
  }
  body {
    font-size: 2rem;
  }
  fieldset {
    border: 1px solid rgba(0,0,0,0.1);
  }
  button {
    outline: none;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: #dda832 var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }
  img {
    max-width: 100%;
  }
  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
`;

export default GlobalStyles;
