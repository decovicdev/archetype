import { Swiper, SwiperSlide } from "swiper/react";

import Container from "@components/shared/container";
import {
  Body,
  LargeHeading,
  SubHeading,
  SubTitle,
} from "@components/shared/typography";
import { VStack } from "@components/shared/stack";
import { testimonials } from "data/mock";

import "swiper/css";

const Testimonials = () => {
  return (
    <Container id="testimonials" className="">
      <VStack className="lg:flex-row items-center justify-between gap-10">
        <VStack className="gap-10">
          <LargeHeading>Testimonials</LargeHeading>
          <Body className="max-w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
            enim enim malesuada habitant. Risus massa tempus in mattis quisque
            in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis
            varius quis et. Curabitur in arcu duis euismod iaculis diam vitae
            scelerisque...
          </Body>
        </VStack>
        <div>
          {/* <Swiper
            slidesPerView={3}
            direction="vertical"
            centeredSlides
            className="h-[888px] w-max p-4 flex flex-col items-center "
            loop={true}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={index} className="w-max h-max">
                  {({ isActive }) => (
                    <VStack
                      className={`
                      ${isActive ? "w-[653px] h-[568px]" : "z-0"}
                      w-[518px] mx-auto h-[454px] overflow-hidden rounded-3xl shadow-card bg-dark-blended p-16 transition-all duration-300`}
                    >
                      <img src={testimonial.image} alt={testimonial.name} />
                      <SubTitle className="mt-4 mb-10">
                        {testimonial.name}
                      </SubTitle>
                      <SubHeading
                        className={`${isActive ? "opacity-100" : "opacity-20"}`}
                      >
                        {testimonial.message}
                      </SubHeading>
                    </VStack>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper> */}
        </div>
      </VStack>
    </Container>
  );
};

export default Testimonials;
