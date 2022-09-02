import { Wrapper } from "./styles";
import { ContainerProps } from "./types";

const Container = ({ children, as = "section", id }: ContainerProps) => {
  return (
    <Wrapper id={id} as={as}>
      {children}
    </Wrapper>
  );
};

export default Container;
