import styled from "styled-components";
import { fontSize } from "../../styles/theme";

export const Title = styled.h2`
  font-family: "Ropa Sans", sans-serif;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  font-size: ${fontSize.xl};

  @media (max-width: 768px) {
    font-size: ${fontSize.lg};
  }
`;
