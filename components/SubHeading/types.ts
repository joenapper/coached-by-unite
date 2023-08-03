import { PropsWithChildren } from "react";

export type SubHeadingProps = PropsWithChildren<{
  noUnderline?: boolean;
  addLineHeight?: boolean;
}>;

export type TitleProps = Pick<SubHeadingProps, "noUnderline">;
