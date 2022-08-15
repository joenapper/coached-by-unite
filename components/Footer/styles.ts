import styled from "styled-components";
import { font } from "../../styles/theme";

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
  border-top: 1rem solid #dbbd44;
  border-bottom: 2rem solid #dbbd44;
  position: relative;
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  li {
    a {
      background-color: #dbbd44;
      align-items: center;
      padding: 1rem 2rem;
      display: flex;
      justify-content: center;
      font-family: ${font.primary};
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: 0.2s ease-in-out;

      &:hover {
        box-shadow: 0 0 5px 3px #010101;
        letter-spacing: 3px;
      }

      img {
        height: 30px;
        width: 30px;
        margin-right: 1rem;
      }
    }
  }
`;

export const Copyright = styled.p`
  position: absolute;
  left: 50%;
  bottom: -1.75rem;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
`;
