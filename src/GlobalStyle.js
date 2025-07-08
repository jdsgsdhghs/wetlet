import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  @font-face {
    font-family: 'Kiara Script';
    src: url('/font/KiaraScript.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica', sans-serif;
  }
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
