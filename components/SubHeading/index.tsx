import { PropsWithChildren } from "react";
import { Title } from "./styles";

const SubHeading = ({ children }: PropsWithChildren) => {
  return (
    <Title>
      <span className="underline">{children}</span>
    </Title>
  );
};

export default SubHeading;
