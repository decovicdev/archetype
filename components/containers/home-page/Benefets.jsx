import { Button } from "@components/shared/button";
import Container from "@components/shared/container";
import { VStack, HStack } from "@components/shared/stack";
import { Body, Heading, LargeHeading } from "@components/shared/typography";
import { benefits } from "data/mock";

const Benefits = () => {
  return (
    <Container>
      <VStack className="gap-14 md:gap-20  xl:gap-28 mt-40">
        <LargeHeading className="max-w-5xl self-end">
          Generate revenue from APIs in minutes.
        </LargeHeading>
        {benefits.map((benefit, index) => {
          const isEven = index % 2 === 0;

          return (
            <VStack
              key={index}
              className={`w-full justify-between items-center gap-6 ${
                isEven ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-[280px] md:w-[332px] lg:w-[640px]"
              />
              <VStack className=" md:w-[280px] lg:w-[440px] gap-6 md:gap-8 lg:gap-10">
                <Heading className="sm:w-[240px] md:w-full">
                  {benefit.title}
                </Heading>
                <Body className=" whitespace-pre-line">
                  {benefit.description}
                </Body>
                <Button>Get Started</Button>
              </VStack>
            </VStack>
          );
        })}
      </VStack>
    </Container>
  );
};

export default Benefits;
