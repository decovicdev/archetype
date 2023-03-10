import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useState } from "react";

import { HStack, VStack } from "@components/shared/stack";
import {
  Body,
  LargeHeading,
  SubHeading,
  SubTitle,
} from "@components/shared/typography";
import SwiperNav from "./SwiperNav";

import "swiper/css";

const TestimonyListDesktop = ({ testimonies }) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <HStack className="items-center justify-between gap-10 w-full">
      <VStack className="gap-10">
        <LargeHeading>Testimonials</LargeHeading>
        <Body className="max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim
          enim malesuada habitant. Risus massa tempus in mattis quisque in dis
          nisi, placerat. Nunc, varius risus neque, amet feugiat felis varius
          quis et. Curabitur in arcu duis euismod iaculis diam vitae
          scelerisque...
        </Body>
      </VStack>
      <HStack className="items-center gap-8">
        <Swiper
          slidesPerView={2}
          direction="vertical"
          centeredSlides
          className=" h-[888px] m-0 gap-0 "
          loop={true}
          onBeforeInit={(swiper) => {
            setSwiper(swiper);
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {testimonies.map((testimonial, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  width: "auto",
                  height: "auto",
                }}
              >
                <TestimonyItem testimonial={testimonial} key={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div>
          <SwiperNav s={swiper} vertical />
        </div>
      </HStack>
    </HStack>
  );
};

const TestimonyItem = (props) => {
  const { testimonial } = props;
  const { isActive } = useSwiperSlide();

  return (
    <div
      className={`-translate-y-28 rounded-3xl w-[653px] h-[568px] [box-shadow:_0px_0px_54px_30px_#151515] overflow-hidden bg-dark-blended p-16 transition
      ${isActive ? "scale-100 z-20 relative" : "scale-75 z-0"}
      `}
    >
      <img src={testimonial.image} alt={testimonial.name} className="h-12" />
      <SubTitle className="mt-4 mb-10">{testimonial.name}</SubTitle>
      <SubHeading
        className={`${isActive ? "opacity-100" : "opacity-20"} max-w-[440px]`}
      >
        {testimonial.message}
      </SubHeading>
    </div>
  );
};

export default TestimonyListDesktop;
