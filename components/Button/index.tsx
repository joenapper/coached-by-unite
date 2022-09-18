import { Wrapper } from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  onClick,
  children,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper onClick={onClick} disabled={disabled} {...props}>
      <span>{children}</span>
    </Wrapper>
  );
};

export default Button;
