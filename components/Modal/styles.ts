import styled, { css } from "styled-components";
import { mediaAbove } from "../../constants/media";
import { colors, spacing } from "../../styles/theme";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.white};
  padding: ${spacing.s6};
  width: calc(100% - 28px);
  max-width: 420px;
  height: auto;
  max-height: calc(100vh - 100px);
  z-index: 1;

  ${mediaAbove.tablet(css`
    max-width: 500px;
  `)}
`;
