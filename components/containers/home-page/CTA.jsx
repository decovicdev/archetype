import Container from "@components/shared/container";
import EarlyAccessForm from "@components/shared/EarlyAccessForm";
import { VStack } from "@components/shared/stack";
import { LargeHeading } from "@components/shared/typography";

const CTA = () => {
  return (
    <Container id="cta" className="mt-40 md:mt-20 px-0 md:px-10 lg:px-5">
      <VStack className="bg-white md:rounded-3xl bg-no-repeat gap-6 bg-cover h-[362px] bg-cta md:bg-cta-xl lg:bg-cta-2xl items-center justify-center relative">
        <LargeHeading className="text-black z-10">
          Ready to dive in?
        </LargeHeading>
        <EarlyAccessForm light />
      </VStack>
    </Container>
  );
};

export default CTA;
