import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin-bottom: 1rem;
    border: 1px solid #dbbd44;
    padding: 1rem;
  }

  textarea {
    resize: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FormGroup = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ImageGroup = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  img {
    width: calc(50% - 0.5rem);
    object-fit: cover;
    max-height: 525px;
  }

  @media (min-width: 768px) {
    max-width: 50%;
    margin-bottom: 0;
  }
`;
