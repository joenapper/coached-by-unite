import styled from "styled-components";
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

  @media (max-width: 768px) {
    font-size: ${fontSize.lg};
  }
`;
