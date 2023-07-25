import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
    }

    * {
      margin: 0;
    }

    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
    }

    input, button, textarea, select {
      font-family: "Regular";
    }

    p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
    }

    h1 {
      font-family: "Bold";
    }

    span, h2, h3, h4, h5, h6, p {
      font-family: "Regular";
    }

    p {
      color: #7D8893;
      line-height: 1.4;
      font-size: 18px;
    }

    ul {
      list-style: none;
    }

    #root, #__next {
      isolation: isolate;
    }
  }
`;

export default GlobalStyle;
