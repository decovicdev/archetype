import Link from "next/link";

import { Button } from "@components/shared/button";
import Container from "@components/shared/container";
import { HDivider } from "@components/shared/divider";
import { HStack, VStack } from "@components/shared/stack";
import {
  Body,
  Heading,
  LargeHeading,
  SubHeading,
} from "@components/shared/typography";
import { pricingList } from "data/mock";

const Pricing = () => {
  return (
    <Container id="pricing">
      <VStack className="">
        <LargeHeading className="w-[210px] md:w-[500px] lg:w-[1000px] lg:self-end">
          Fire prices to fit your needs
        </LargeHeading>
        <VStack className="gap-4 lg:gap-5 md:gap-0  w-full mt-20 md:flex-row flex-col ">
          {pricingList.map((pricing, index) => {
            const bestOffer = index === 0;
            const middleOffer = index === 1;
            return (
              <VStack
                key={index}
                className={`w-full md:w-[262px] md:h-[476px] lg:w-[30%] 
                xl:w-[518px] lg:h-[560px] gap-6 md:gap-8 xl:gap-10 shadow-card bg-noisy-lighten ${
                  bestOffer && "lg:bg-noisy-primary"
                }
                ${middleOffer && "md:scale-110 md:bg-dark-blended z-10"}
                 rounded-2xl p-6 md:p-8 lg:p-10 
                 lg:bg-noisy-lighten
                 lg:scale-100  
                 `}
              >
                <Heading className="[background-image:linear-gradient(90deg,white_70%,transparent)] [background-clip:text] text-transparent">
                  {pricing.title}
                </Heading>
                <HStack className="justify-end w-full">
                  {pricing.originalPrice && (
                    <Body className="line-through">
                      {pricing.originalPrice}
                    </Body>
                  )}
                  <SubHeading>$</SubHeading>
                  <div>
                    <Heading>{pricing.price}</Heading>
                    <Body>/per month</Body>
                  </div>
                </HStack>
                <HDivider />
                <ul className="grid gap-2">
                  {pricing.features.map((feature, index) => {
                    return (
                      <li className="list-disc list-inside " key={index}>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
                <Link href="#main" className="mt-auto">
                  <Button size="s">Get Started</Button>
                </Link>
              </VStack>
            );
          })}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Pricing;
