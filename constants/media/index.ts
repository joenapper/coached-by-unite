import { css, FlattenSimpleInterpolation } from "styled-components";

import breakpoints from "../breakpoints";
import type { Media } from "./types";

export const mediaAbove = Object.keys(breakpoints).reduce(
  (accumulator, name) => ({
    ...accumulator,
    [name]: (styles: FlattenSimpleInterpolation | string) => css`
      @media screen and (min-width: ${breakpoints[name].breakpoint}px) {
        ${styles}
      }
    `,
  }),
  {} as Media
);

export const mediaBelow = Object.keys(breakpoints).reduce(
  (accumulator, name) => ({
    ...accumulator,
    [name]: (styles: FlattenSimpleInterpolation | string) => css`
      @media screen and (max-width: ${breakpoints[name].breakpoint - 1}px) {
        ${styles}
      }
    `,
  }),
  {} as Media
);
