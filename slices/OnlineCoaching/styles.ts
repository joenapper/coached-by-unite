import styled, { css } from "styled-components";
import { mediaAbove, mediaBelow } from "../../constants/media";
import { spacing } from "../../styles/theme";

export const OnlineCoachingWrapper = styled.div`
  max-width: 660px;
  margin: auto;
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
`;

export const FlexContainer = styled.div`
  ${mediaAbove.desktop(css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${spacing.s4};
  `)}
`;

export const VideoWrapper = styled.div`
  position: relative;
  height: 480px;
  width: 240px;
  margin-bottom: ${spacing.s8};
  border-radius: 32px;

  video {
    border-radius: 32px;
  }

  ${mediaBelow.tablet(css`
    margin: auto auto 1rem auto;
  `)}
`;

export const Detail = styled.h3`
  font-weight: 300;
  margin-bottom: ${spacing.s4};
`;
