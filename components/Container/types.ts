import { PropsWithChildren } from "react";
import { Identifier } from "../../types";

export type ContainerProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
}> &
  Identifier;
