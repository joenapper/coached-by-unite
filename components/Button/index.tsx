import { PropsWithChildren } from "react";
import { Wrapper } from "./styles";

const Button = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Wrapper {...props}>
      <span>{children}</span>
    </Wrapper>
  );
};

export default Button;
