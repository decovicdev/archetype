import Image from "next/image";

import Social from "@components/shared/contact/Social";
import Container from "@components/shared/container";
import EarlyAccessForm from "@components/shared/EarlyAccessForm";
import { HStack, VStack } from "@components/shared/stack";
import { Body, Heading, LargeHeading } from "@components/shared/typography";

const Hero = () => {
  return (
    <Container id="main" className="mt-0 lg:mt-14 overflow-hidden relative">
      <HStack className="lg:items-end w-full justify-between lg:gap-6 flex-col-reverse lg:flex-row">
        <VStack className="w-[242px]  md:w-[420px] lg:w-[520px] xl:w-[700px] gap-6 md:gap-6 xl:gap-10 -translate-y-1/4 lg:translate-y-0">
          <LargeHeading>Effortless Usage-based billing for APIs</LargeHeading>
          <Body className="">
            Archetype helps API companies launch, iterate and scale their
            businesses with flexible and developer-first infrastructure that
            works at any size and stage.
          </Body>
          <EarlyAccessForm />
        </VStack>
        <div className="object-contain w-[288px] md:w-[632px] lg:w-[500px] xl:w-[706px] self-end -mr-16 md:-mr-24 lg:mr-10">
          <Image
            loading="eager"
            src="/images/hero.png"
            alt="hero"
            width={768}
            height={768}
            priority
          />
        </div>
      </HStack>
      <div className="hidden md:block absolute right-10 bottom-20">
        <Social vertical />
      </div>
    </Container>
  );
};

export default Hero;
