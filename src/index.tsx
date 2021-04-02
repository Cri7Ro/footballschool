import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import {createGlobalStyle} from 'styled-components';

export const GlobalFont = createGlobalStyle`
  @font-face {
    src: url(./CirceRounded-Regular.ttf);
    font-family: 'CirceRounded';
    font-weight: normal;
  }
  
  body {
    width: 100%;
    font-family: 'CirceRounded';
    h1 {
      font-size: 4.5rem;
      line-height: 4rem;
    };

    h2 {
      font-size: 4rem;
      line-height: 4rem;
    };

    h3 {
      font-size: 3rem;
      line-height: 3rem;
    };

    h4 {
      font-size: 2rem;
      line-height: 2.5rem;
    };

    h5 {
      font-size: 1.25rem;
      line-height: 1.6rem;
    };

    p {
      font-size: 1rem;
      line-height: 1.9rem;
    };

    .mapboxgl-map {
      font: 12px/20px Helvetica Neue,Arial,Helvetica,sans-serif;
      overflow:hidden;
      position:relative;
      tap-highlight-color:white;
    };

    .mapboxgl-canvas {
      outline: none;
    };
  }
  
  @media screen and (max-width: 480px) {
    body {
      h1 {
        font-size: 3rem;
        line-height: 2.5rem;
      };

      h2 {
        font-size: 2.5rem;
        line-height: 2.5rem;
      };
    }
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalFont />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
