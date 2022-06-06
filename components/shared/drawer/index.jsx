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
import { MenuIcon, PhoneIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/outline";
import Nav from "../header/Nav";
import { HStack, VStack } from "../stack";
import { Body } from "../typography";

const Drawer = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>
        <MenuIcon className="h-6 w-6 text-white" />
      </button>
      <_Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="bg-primary pt-20 md:pt-32 p-10">
          <DrawerCloseButton className="absolute top-0 right-0 m-8" />
          <DrawerHeader className=""></DrawerHeader>
          <DrawerBody className="">
            <Nav />
          </DrawerBody>
          <DrawerFooter className="mt-20">
            <HStack className="flex-1 gap-6 justify-between items-center ">
              <VStack className="gap-4">
                <HStack className="gap-3 items-center">
                  <PhoneIcon className="h-6 w-6 text-gray-400" />
                  <Body>+12 034 567 89 01</Body>
                </HStack>
                <HStack className="gap-3 items-center">
                  <MailIcon className="h-6 w-6 text-gray-400" />
                  <Body>info@archetype.com</Body>
                </HStack>
              </VStack>
              <VStack className="items-center gap-4 md:flex-row ">
                <img src="/images/twitter.png" alt="twitter" />
                <img src="/images/facebook.png" alt="facebook" />
                <img src="/images/linkedin.png" alt="linkedin" />
              </VStack>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </_Drawer>
    </>
  );
};

export default Drawer;
