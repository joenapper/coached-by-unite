import { PropsWithChildren } from "react";

export type PortalProps = PropsWithChildren<{
  /** Element ID css selector in which to assign the Portal to - defaults to __next */
  target?: string;
}>;
