import styled from "styled-components";
import { colors, font, fontSize, spacing } from "../../styles/theme";

export const Wrapper = styled.footer`
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
  border-top: 1rem solid ${colors.primary};
  border-bottom: 3rem solid ${colors.primary};
  position: relative;

  @media (min-width: 768px) {
    border-bottom: 2rem solid ${colors.primary};
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing.s4};

  li {
    a {
      background-color: ${colors.primary};
      align-items: center;
      padding: 1rem 2rem;
      display: flex;
      justify-content: center;
      font-family: ${font.primary};
      font-size: ${fontSize.sm};
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: 0.2s ease-in-out;
      gap: ${spacing.s4};

      &:hover {
        box-shadow: 0 0 5px 3px #010101;
        letter-spacing: 3px;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Copyright = styled.p`
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  font-size: ${fontSize.sm};

  @media (min-width: 768px) {
    bottom: -24px;
  }
`;
