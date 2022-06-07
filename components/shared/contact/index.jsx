import { MailIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/solid";

import { VStack, HStack } from "../stack";
import { Body } from "../typography";
import Social from "./Social";

const Contact = () => {
  return (
    <>
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
      <Social />
    </>
  );
};

export default Contact;
