import Container from "@components/shared/container";
import { HStack, VStack } from "@components/shared/stack";
import { Body, LargeHeading } from "@components/shared/typography";

const Hero = () => {
  return (
    <Container className="mt-0 lg:mt-14 overflow-hidden">
      <HStack className="items-end w-full justify-between  ">
        <VStack className="w-[420px] gap-6 md:gap-6 xl:gap-10">
          <LargeHeading>Monetize your API</LargeHeading>
          <Body className="">
            With a one-time integration, save your engineers months of having to
            build billing, quota or permission infrastructure.
          </Body>
        </VStack>
        <img
          src="/images/hero.png"
          alt="hero"
          className="w-[288px] md:w-[632px] lg:w-[786px] float-left -mr-20 md:-mr-20 lg:mr-0"
        />
      </HStack>
    </Container>
  );
};

export default Hero;
