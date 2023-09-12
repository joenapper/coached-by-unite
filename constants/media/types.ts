import type { FlattenSimpleInterpolation } from "styled-components";

export type Media = {
  [key: string]: (
    styles: FlattenSimpleInterpolation | string
  ) => FlattenSimpleInterpolation;
};
