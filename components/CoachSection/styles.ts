import styled from "styled-components";
import { colors, font, fontSize } from "../../styles/theme";
import { WrapperProps } from "./types";

export const Wrapper = styled.div<WrapperProps>`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: ${({ reversed }) => reversed && "row-reverse"};
  }
`;

export const ImageGroup = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: space-between;

  img {
    width: calc(50% - 0.5rem);
    object-fit: cover;
    max-height: 525px;
  }

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

export const TextGroup = styled.div<WrapperProps>`
  h3 {
    font-family: ${font.primary};
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    font-size: ${fontSize.base};

    span {
      background: ${colors.primary};
      padding: 0.5rem 0.25rem;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    padding: ${({ reversed }) => (reversed ? "0 1rem 0 0" : "0 0 0 1rem")};

    h3 {
      margin-top: 0.5rem;
    }
  }
`;
