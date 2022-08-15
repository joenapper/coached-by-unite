import { PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
}>;
