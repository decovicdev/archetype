import { useDisclosure } from "@chakra-ui/react";

import { Button } from "./button";
import EarlyAccessPopup from "./modal/EarlyAccessPopup";
import { VStack } from "./stack";

const EarlyAccessForm = ({ light = false }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <EarlyAccessPopup isOpen={isOpen} onClose={onClose} />
      <VStack className="md:flex-row gap-4 md:gap-0 overflow-visible ">
        <input
          placeholder="Your Email"
          className={`w-[272px] md:w-max ${
            light ? "rgba(21, 21, 21, 0.08)" : "bg-[rgba(255,255,255,0.08)]"
          }
        rounded-lg md:rounded-br-none md:rounded-tr-none py-2 pl-4 `}
        />
        <Button
          onClick={onOpen}
          size="s"
          className={`rounded-lg md:rounded-bl-none md:rounded-tl-none ${
            light && "bg-dark-100 hover:!bg-primary !text-white"
          } `}
        >
          Request Early Access
        </Button>
      </VStack>
    </div>
  );
};

export default EarlyAccessForm;
