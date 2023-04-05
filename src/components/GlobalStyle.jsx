import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Black And White Picture', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Roboto:wght@100&display=swap');
  }
  body{
    font-family: 'Black And White Picture', sans-serif; 
    padding-top: 1em;
    white-space: pre-wrap;
  }
  ul,ol{
    list-style: none;
    padding-left: 0px;
  }
`;

export default GlobalStyle;
