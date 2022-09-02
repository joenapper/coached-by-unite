import styled from "styled-components";
import { spacing } from "../../styles/theme";

export const FlexContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${spacing.s4};
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: ${spacing.s8};

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    height: 720px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;

    img {
      width: auto;
      height: 100%;
    }
  }

  @media (min-width: 1024px) {
    height: 416px;
  }
`;

export const SubSubHeading = styled.h3`
  font-weight: 300;
  margin-bottom: ${spacing.s4};
  text-align: center;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.s4};
  margin-top: ${spacing.s4};
`;
