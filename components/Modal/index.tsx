import { useRef, MutableRefObject } from "react";
import { Overlay, Wrapper } from "./styles";
import { ModalProps } from "./types";
import { useClickOutside } from "../../hooks/useClickOutside";

const Modal = ({ id, onClose, isModalOpen = false, children }: ModalProps) => {
  const modalRef = useRef() as MutableRefObject<HTMLDivElement>;
  useClickOutside(modalRef, () => onClose());

  if (!isModalOpen) return null;

  return (
    <>
      <Overlay />
      <Wrapper
        data-testid={id}
        id={id}
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        ref={modalRef}
      >
        {children}
      </Wrapper>
    </>
  );
};

export default Modal;
