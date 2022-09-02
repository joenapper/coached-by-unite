import { PropsWithChildren } from "react";

export type SubHeadingProps = PropsWithChildren<{
  noUnderline?: boolean;
}>;

export type TitleProps = Pick<SubHeadingProps, "noUnderline">;
