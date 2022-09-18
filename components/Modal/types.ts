import { PropsWithChildren } from "react";
import { Identifier } from "../../types";

export type ModalProps = PropsWithChildren<
  {
    onClose: () => void;
    isModalOpen?: boolean;
  } & Identifier
>;
