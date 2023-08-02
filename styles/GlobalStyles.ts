import { createGlobalStyle, css } from "styled-components";
import { mediaAbove, mediaBelow } from "../constants/media";
import { colors, fontSize } from "./theme";

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
    color: ${colors.black};
    font-family: "Montserrat", sans-serif;
    font-size: ${fontSize.sm};
    
    ${mediaBelow.tablet(css`
      font-size: ${fontSize.base};
    `)}
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
    border-bottom: 5px solid ${colors.primary};
  }

  /* TODO: Review if to change tablet to desktop */
  ${mediaBelow.tablet(css`
    .desktop-only {
      display: none;
    }
  `)}

  ${mediaAbove.tablet(css`
    .mobile-only {
      display: none;
    }
  `)}
`;

export default GlobalStyles;
