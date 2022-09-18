import styled from "styled-components";
import { colors, fontSize, spacing } from "../../styles/theme";

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
  color: ${colors.white};
  border-top: 1rem solid ${colors.primary};
  border-bottom: 1rem solid ${colors.primary};
  text-align: center;

  p {
    font-size: ${fontSize.base};
    margin-bottom: ${spacing.s8};
  }
`;
