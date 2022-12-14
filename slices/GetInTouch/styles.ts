import styled from "styled-components";
import { colors, fontSize, spacing } from "../../styles/theme";

export const placeholderColor = "grey";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: ${spacing.s4};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin-bottom: 1rem;
    border: 1px solid ${colors.primary};
    padding: 1rem;
    font-size: ${fontSize.base};

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${placeholderColor};
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${placeholderColor};
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${placeholderColor};
    }
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

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const ImageGroup = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.s4};

  img {
    width: calc(50% - 0.5rem);
    object-fit: cover;
    max-height: 525px;
  }
`;

export const ImageWrapper = styled.div`
  display: none;

  img {
    width: 100%;
    object-fit: cover;
    max-height: 130px;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;
