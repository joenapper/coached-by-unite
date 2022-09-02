import Container from "../Container";
import SubHeading from "../SubHeading";
import { Wrapper } from "./styles";
import { CallToActionProps } from "./types";

const CallToAction = ({ title, text, children }: CallToActionProps) => {
  return (
    <Wrapper>
      <Container>
        <SubHeading noUnderline>{title}</SubHeading>
        <p>{text}</p>
        {children}
      </Container>
    </Wrapper>
  );
};

export default CallToAction;
