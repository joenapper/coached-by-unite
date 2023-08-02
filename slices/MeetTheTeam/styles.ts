import styled from "styled-components";
import { spacing } from "../../styles/theme";

export const MeetTheTeamWrapper = styled.div`
  display: flex;
  gap: ${spacing.s4};
  margin: auto;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Name = styled.h4`
  text-align: center;
`;
