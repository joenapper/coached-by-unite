import Portal from "../../components/Portal";
import Modal from "../../components/Modal";
import { ModalProps } from "../../components/Modal/types";
import Button from "../../components/Button";
import SubHeading from "../../components/SubHeading";
import SuccessIllustration from "../../icons/SuccessIllustration";
import { IllustrationWrapper, Text } from "./styles";

export const SuccessModal = ({ onClose, isModalOpen }: ModalProps) => {
  return (
    <Portal target="modal">
      <Modal id="success-modal" onClose={onClose} isModalOpen={isModalOpen}>
        <IllustrationWrapper>
          <SuccessIllustration />
        </IllustrationWrapper>
        <SubHeading>Success!</SubHeading>
        <Text>
          Your message was sent successfully.
          <br />
          One of our coaches will contact you shortly.
        </Text>
        <Button onClick={onClose}>Close</Button>
      </Modal>
    </Portal>
  );
};
