import { createGlobalStyle } from "styled-components";
import { colors, font, fontSize } from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    /* color: #ffffff; */
    color: ${colors.black};
    font-family: "Montserrat", sans-serif;
    font-size: ${fontSize.sm};
    
    @media (max-width: 768px) {
      font-size: ${fontSize.base};
    }
  }

  ul {
    list-style: none;
    margin-left: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
  }

  a,
  input,
  button,
  textarea,
  select {
    font-family: inherit;
  }

  .underline {
    border-bottom: 5px solid #dbbd44;
  }

  @media (max-width: 768px) {
    .desktop-only {
      display: none
    }
  }

  @media (min-width: 768px) {
    .mobile-only {
      display: none
    }
  }
`;

export default GlobalStyles;
