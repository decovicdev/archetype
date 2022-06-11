import { useSwiperSlide, SwiperSlide, Swiper } from "swiper/react";

import {
  SubTitle,
  SubHeading,
  LargeHeading,
  Body,
} from "@components/shared/typography";
import { HStack, VStack } from "@components/shared/stack";
import SwiperNav from "./SwiperNav";
import { Autoplay } from "swiper";

const TestimonyListMobile = ({ testimonies }) => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides
      className="w-auto h-auto"
      loop={true}
      modules={[Autoplay]}
      autoplay
      autoHeight
    >
      <span slot="container-start" className="">
        <VStack className="gap-10 mb-10">
          <LargeHeading>Testimonials</LargeHeading>
          <Body className="max-w-[280px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
            enim enim malesuada habitant. Risus massa tempus in mattis quisque
            in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis
            varius quis et. Curabitur in arcu duis euismod iaculis diam vitae
            scelerisque...
          </Body>
        </VStack>
      </span>
      <span slot="container-end" className="">
        <div className="mt-10 w-max ml-auto">
          <SwiperNav />
        </div>
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
      className={`rounded-lg h-[278px]  [box-shadow:_0px_0px_54px_30px_#151515] bg-dark-blended p-6 transition
    `}
    >
      <img src={testimonial.image} alt={testimonial.name} className="h-6" />
      <SubTitle className="mt-4 mb-10">{testimonial.name}</SubTitle>
      <SubHeading className=" max-w-[330px]">{testimonial.message}</SubHeading>
    </div>
  );
};

export default TestimonyListMobile;
