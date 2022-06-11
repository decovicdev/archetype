import Container from "@components/shared/container";
import { VStack } from "@components/shared/stack";
import { testimonies } from "data/mock";

import TestimonyListTablet from "./TestimonyListTablet";
import TestimonyListMobile from "./TestimonyListMobile";
import TestimonyListDesktop from "./DesktopTestimonyList";

const Testimonials = () => {
  return (
    <Container id="testimonials" className="relative">
      <VStack className="lg:flex-row lg:items-center justify-between gap-10">
        <div className="w-full relative">
          <div className=" md:hidden">
            <TestimonyListMobile testimonies={testimonies} />
          </div>
          <div className="hidden md:block lg:hidden">
            <TestimonyListTablet testimonies={testimonies} />
          </div>
          <div className="hidden lg:block">
            <TestimonyListDesktop testimonies={testimonies} />
          </div>
        </div>
      </VStack>
    </Container>
  );
};

export default Testimonials;
