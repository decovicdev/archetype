import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { HStack, VStack } from "@components/shared/stack";
import {
  Body,
  LargeHeading,
  SubHeading,
  SubTitle,
} from "@components/shared/typography";
import SwiperNav from "./SwiperNav";

import "swiper/css";

const TestimonyListTablet = ({ testimonies }) => {
  return (
    <Swiper
      slidesPerView={2}
      centeredSlides
      className="w-auto h-auto"
      loop={true}
      modules={[Autoplay]}
      autoplay
      autoHeight
    >
      <span slot="container-start" className="">
        <HStack className="w-full justify-between items-end mb-10">
          <VStack className="gap-10">
            <LargeHeading>Testimonials</LargeHeading>
            <Body className="max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              enim enim malesuada habitant. Risus massa tempus in mattis quisque
              in dis nisi, placerat. Nunc, varius risus neque, amet feugiat
              felis varius quis et. Curabitur in arcu duis euismod iaculis diam
              vitae scelerisque...
            </Body>
          </VStack>
          <SwiperNav />
        </HStack>
      </span>
      {testimonies.map((testimonial, index) => {
        return (
          <SwiperSlide
            index={index}
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
  );
};

const TestimonyItem = (props) => {
  const { testimonial } = props;
  const { isActive } = useSwiperSlide();

  return (
    <div
      className={`my-10 -translate-x-12 rounded-2xl w-[449px] h-[420px]  [box-shadow:_0px_0px_54px_30px_#151515] overflow-hidden bg-dark-blended p-10 transition
    ${isActive ? "scale-100 z-20 relative" : "scale-75 z-0"}`}
    >
      <img src={testimonial.image} alt={testimonial.name} className="h-8" />
      <SubTitle className="mt-4 mb-10">{testimonial.name}</SubTitle>
      <SubHeading
        className={`${isActive ? "opacity-100" : "opacity-20"} max-w-[330px]`}
      >
        {testimonial.message}
      </SubHeading>
    </div>
  );
};

export default TestimonyListTablet;
