import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/modal";
import { VStack } from "../stack";

import { Body, SubHeading } from "../typography";

const EarlyAccessPopup = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
      <ModalOverlay bg="rgba(0, 0, 0, .96)" />
      <ModalContent
        className="!bg-noisy-primary p-10 !bg-transparent !rounded-3xl !shadow-card m-2 ![background-blend-mode:luminosity,normal,normal;]"
        backdropBlur={20}
      >
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack className="items-center gap-6">
            <SubHeading>Well done!</SubHeading>
            <div className="text-center">
              <Body>You are on the list!</Body>
              <Body>We will update you soon with your invite.</Body>
            </div>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EarlyAccessPopup;
