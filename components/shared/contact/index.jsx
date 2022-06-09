import { MailIcon } from "@heroicons/react/outline";

import { HStack } from "../stack";
import { Body } from "../typography";
import Social from "./Social";

const Contact = () => {
  return (
    <>
      <HStack className="gap-3 items-center">
        <MailIcon className="h-6 w-6 text-gray-400" />
        <Body>hello@archetype.dev</Body>
      </HStack>
      <Social />
    </>
  );
};

export default Contact;
