import { PropsWithChildren } from "react";

export type CoachSectionProps = PropsWithChildren<{
  reversed?: boolean;
  name: string;
}>;

export type WrapperProps = Pick<CoachSectionProps, "reversed">;
