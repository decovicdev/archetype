import Social from "@components/shared/contact/Social";
import Container from "@components/shared/container";
import EarlyAccessForm from "@components/shared/EarlyAccessForm";
import { HStack, VStack } from "@components/shared/stack";
import { Body, LargeHeading } from "@components/shared/typography";

const Hero = () => {
  return (
    <Container id="main" className="mt-0 lg:mt-14 overflow-hidden relative">
      <HStack className="lg:items-end w-full justify-between  flex-col-reverse lg:flex-row">
        <VStack className="w-[242px]  md:w-[420px] gap-6 md:gap-6 xl:gap-10 -translate-y-1/4">
          <LargeHeading>Effortless Usage-based billing for APIs</LargeHeading>
          <Body className="">
            Archetype helps API companies launch, iterate and scale their
            businesses with flexible and developer-first infrastructure that
            works at any size and stage.
          </Body>
          <EarlyAccessForm />
        </VStack>
        <img
          src="/images/hero.png"
          alt="hero"
          className="w-[288px] md:w-[632px] object-contain lg:w-[786px] self-end  -mr-16 md:-mr-24 lg:mr-0"
        />
      </HStack>
      <div className="hidden md:block absolute right-10 bottom-20">
        <Social vertical />
      </div>
    </Container>
  );
};

export default Hero;
