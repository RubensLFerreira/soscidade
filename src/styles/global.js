import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    Max-width: 100vw;
    max-height: 100vh;
    background-color: #f0f2f5;
    font-family: Poppins
  }
`;

export default GlobalStyle;
