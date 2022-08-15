import Container from "../Container";
import { Wrapper } from "./styles";
import { CallToActionProps } from "./types";

const CallToAction = ({ title, text, children }: CallToActionProps) => {
  return (
    <Wrapper>
      <Container>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </Container>
    </Wrapper>
  );
};

export default CallToAction;
