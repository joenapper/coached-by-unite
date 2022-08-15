import { Wrapper } from "./styles";
import { ContainerProps } from "./types";

const Container = ({ children, as = "section" }: ContainerProps) => {
  return <Wrapper as={as}>{children}</Wrapper>;
};

export default Container;
