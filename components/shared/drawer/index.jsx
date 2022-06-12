import {
  Drawer as _Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerCloseButton,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { MenuIcon } from "@heroicons/react/solid";

import Nav from "../header/Nav";
import { HStack, VStack } from "../stack";
import Contact from "../contact";
import EarlyAccessForm from "../EarlyAccessForm";
import { ButtonOutline } from "../button";

const Drawer = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <style>
        {`
        ::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-track {
          background-color: #f5f5f5;
        }
      `}
      </style>
      <button onClick={onOpen} aria-label="Open drawer">
        <MenuIcon className="h-6 w-6 text-white" />
      </button>
      <_Drawer
        isOpen={isOpen}
        size="full"
        placement="right"
        onClose={onClose}
        trapFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent className="!bg-primary pt-20 md:pt-28 p-10 overflow-y-auto">
          <DrawerCloseButton className="absolute top-0 right-0 m-8" />
          <DrawerHeader className=""></DrawerHeader>
          <DrawerBody className="">
            <Nav onClose={onClose} />
          </DrawerBody>
          <DrawerFooter className="mt-20  flex-col gap-10 !items-stretch !hidden md:flex">
            <VStack className="md:flex-row justify-between gap-10 ">
              <EarlyAccessForm />
              <ButtonOutline size="s">Get Started</ButtonOutline>
            </VStack>
            <HStack className="flex-1 gap-6 justify-between items-center ">
              <Contact />
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </_Drawer>
    </>
  );
};

export default Drawer;
