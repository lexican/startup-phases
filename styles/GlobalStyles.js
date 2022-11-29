import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
  }
  body {
    padding: 0;
	  margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
