import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { HStack, VStack } from "../stack";
import { SubHeading, Body } from "../typography";
import { ArrowUp } from "@components/icons";

const variants = {
  open: {
    opacity: 1,
    height: "auto",
  },
  closed: {
    opacity: 0,
    height: 0,
  },
};

const Accordion = (props) => {
  const { question, answer, index } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HStack
      className="justify-between gap-6 items-start w-full"
      onClick={toggle}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
    >
      <VStack>
        <SubHeading className="">{question}</SubHeading>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="overflow-hidden"
              animate="open"
              exit="closed"
              initial="closed"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <Body className="mt-6 md:mt-10  xl:mt-12">{answer}</Body>
            </motion.div>
          )}
        </AnimatePresence>
      </VStack>
      <div>
        <ArrowUp
          className={`w-10 h-10 md:h-14 md:w-14 lg:w-24 lg:h-24 transition duration-300 ease-in-out 
          ${isOpen ? "rotate-180" : "rotate-0"} `}
          stroke={!hovering ? "url(#paint0_linear_1)" : "url(#paint0_linear_2)"}
        />
      </div>
    </HStack>
  );
};

export default Accordion;
