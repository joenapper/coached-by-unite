import styled from "styled-components";
import { colors, font, fontSize } from "../../styles/theme";
import Container from "../Container";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
  }
`;

export const HeroContent = styled(Container)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  z-index: 1;
  text-align: center;

  h1 {
    font-family: ${font.primary};
    font-size: ${fontSize.xxl};
    text-transform: uppercase;
    color: #f4f4f4;
  }

  & > span {
    font-size: ${fontSize.base};
    letter-spacing: 2px;
    margin: 0.25rem auto 2rem auto;
  }
`;
