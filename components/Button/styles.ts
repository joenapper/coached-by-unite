import styled from "styled-components";
import { colors, fontSize } from "../../styles/theme";

export const Wrapper = styled.button`
  text-transform: uppercase;
  overflow: hidden;
  position: relative;
  color: ${colors.white};
  background-color: #222;
  padding: 1rem 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  span {
    font-weight: 700;
    font-size: ${fontSize.sm};
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: ${colors.primary};
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  &:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;
