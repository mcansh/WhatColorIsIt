import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
    text-size-adjust: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    line-height: 1.47059;
  }
`;

export default GlobalStyle;
