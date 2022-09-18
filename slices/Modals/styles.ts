import styled from "styled-components";
import { fontSize, spacing } from "../../styles/theme";

export const IllustrationWrapper = styled.div`
  margin: 0 auto ${spacing.s4} auto;

  svg {
    max-height: 100px;
    width: auto;
  }
`;

export const Text = styled.p`
  margin-bottom: ${spacing.s4};
  text-align: center;
  font-size: ${fontSize.base};
`;
