import styled, { css } from "styled-components";
import { mediaBelow } from "../../constants/media";
import { fontSize, spacing } from "../../styles/theme";
import { TitleProps } from "./types";

const marginWithUnderline = `calc(${spacing.s4} + 5px)`;

export const Title = styled.h2<TitleProps>`
  font-family: "Ropa Sans", sans-serif;
  text-transform: uppercase;
  margin-bottom: ${({ noUnderline }) =>
    noUnderline ? spacing.s4 : marginWithUnderline};
  text-align: center;
  font-size: ${fontSize.xl};

  ${mediaBelow.tablet(css`
    font-size: ${fontSize.lg};
  `)}
`;
