import Container from "@components/shared/container";
import { VStack } from "@components/shared/stack";
import { LargeHeading } from "@components/shared/typography";

const CTA = () => {
  return (
    <Container className="mt-40 pb-40 px-0 md:px-10 lg:px-5">
      <VStack className="bg-white md:rounded-3xl h-[362px] items-center justify-center relative">
        <img
          src="/images/cta-bg.png"
          className="w-full h-full absolute top-0"
        />
        <LargeHeading className="text-black z-10">
          Ready to dive in?
        </LargeHeading>
      </VStack>
    </Container>
  );
};

export default CTA;
