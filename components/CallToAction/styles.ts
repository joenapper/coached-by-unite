import styled from "styled-components";
import { font, fontSize } from "../../styles/theme";

export const Wrapper = styled.section`
  background-image: radial-gradient(
      circle at center center,
      rgba(33, 33, 33, 0),
      rgb(33, 33, 33)
    ),
    repeating-linear-gradient(
      135deg,
      rgb(33, 33, 33) 0px,
      rgb(33, 33, 33) 1px,
      transparent 1px,
      transparent 4px
    ),
    repeating-linear-gradient(
      45deg,
      rgb(56, 56, 56) 0px,
      rgb(56, 56, 56) 5px,
      transparent 5px,
      transparent 6px
    ),
    linear-gradient(90deg, rgb(33, 33, 33), rgb(33, 33, 33));
  color: #fff;
  border-top: 1rem solid #dbbd44;
  border-bottom: 1rem solid #dbbd44;
  text-align: center;

  h2 {
    font-size: ${fontSize.lg};
    font-family: ${font.primary};
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${fontSize.base};
    margin-bottom: 2rem;
  }

  a:hover {
    letter-spacing: 2px;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: ${fontSize.xxl};
    }
  }
`;
