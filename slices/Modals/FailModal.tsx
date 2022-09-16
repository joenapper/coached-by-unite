import Portal from "../../components/Portal";
import Modal from "../../components/Modal";
import { ModalProps } from "../../components/Modal/types";
import Button from "../../components/Button";
import SubHeading from "../../components/SubHeading";
import FailIllustration from "../../icons/FailIllustration";
import { IllustrationWrapper, Text } from "./styles";

export const FailModal = ({ onClose, isModalOpen }: ModalProps) => {
  return (
    <Portal target="modal">
      <Modal id="fail-modal" onClose={onClose} isModalOpen={isModalOpen}>
        <IllustrationWrapper>
          <FailIllustration />
        </IllustrationWrapper>
        <SubHeading>Uh oh.</SubHeading>
        <Text>
          Something weird happened.
          <br />
          Please try again later.
        </Text>
        <Button>Close</Button>
      </Modal>
    </Portal>
  );
};
