import { Fragment } from "react";

import Accordion from "@components/shared/accordion";
import Container from "@components/shared/container";
import { HDivider } from "@components/shared/divider";
import { HStack, VStack } from "@components/shared/stack";
import { LargeHeading, SubTitle } from "@components/shared/typography";
import { faqs } from "data/mock";

const FAQ = (props) => {
  return (
    <Container id="faq" className="">
      <HStack className="justify-between items items-start gap-6 w-full">
        <img
          src="/images/faq-xl.png"
          className="hidden lg:block"
          alt="FAQ"
          loading="lazy"
        />
        <VStack className="gap-6 md:gap-10 xl:gap-12 w-full">
          <VStack className="md:flex-row md:items-end justify-between">
            <VStack className="gap-10">
              <LargeHeading>FAQ</LargeHeading>
              <SubTitle className="w-[240px] md:w-[332px] lg:w-[540px]">
                We have collected frequently asked questions in this section.
              </SubTitle>
            </VStack>
            <img
              src="/images/faq.png"
              className="lg:hidden"
              alt="FAQ"
              loading="lazy"
            />
          </VStack>
          <VStack className="gap-6 md:gap-10 xl:gap-12 w-full">
            {faqs.map((faq, index) => (
              <Fragment key={index}>
                <Accordion {...faq} />
                {index < faqs.length - 1 && <HDivider />}
              </Fragment>
            ))}
          </VStack>
        </VStack>
      </HStack>
    </Container>
  );
};

export default FAQ;
