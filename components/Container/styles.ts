import styled, { css } from "styled-components";
import { mediaAbove } from "../../constants/media";

export const Wrapper = styled.section`
  max-width: 1280px;
  margin: auto;
  padding: 4rem 1rem;

  ${mediaAbove.tablet(css`
    padding: 4rem 10%;
  `)}

  ${mediaAbove.desktop(css`
    padding: 4rem 15%;
  `)}
`;
