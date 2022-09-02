import { Title } from "./styles";
import { SubHeadingProps } from "./types";

const SubHeading = ({ children, noUnderline = false }: SubHeadingProps) => {
  return (
    <Title noUnderline={noUnderline}>
      <span className={`${noUnderline ? "" : "underline"}`}>{children}</span>
    </Title>
  );
};

export default SubHeading;
