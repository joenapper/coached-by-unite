import { Title } from "./styles";
import { SubHeadingProps } from "./types";

const SubHeading = ({
  children,
  noUnderline = false,
  addLineHeight = false,
}: SubHeadingProps) => {
  return (
    <Title noUnderline={noUnderline}>
      <span
        className={`${noUnderline ? "" : "underline"} ${
          addLineHeight ? "line-height" : ""
        }`}
      >
        {children}
      </span>
    </Title>
  );
};

export default SubHeading;
