import styled from "styled-components";
import { colors, spacing } from "../../styles/theme";

// todo: revisit after looking at react select package
export const placeholderColor = colors.black;

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
  select,
  textarea {
    margin-bottom: 1rem;
    border: 1px solid ${colors.primary};
    padding: 1rem;

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
