import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

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
//`${isActive ? "w-[653px] h-[568px]" : "z-0"} w-[518px] mx-auto h-[454px] overflow-hidden rounded-3xl shadow-card bg-dark-blended p-16 transition-all duration-300`;

const Testimonials = () => {
  return (
    <Container id="testimonials" className="">
      <VStack className="lg:flex-row lg:items-center justify-between gap-10">
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
        <div className="w-full">
          {/* <Swiper
            slidesPerView={3}
            centeredSlides
            className="h-auto w-[688px] "
            loop={true}
            // modules={[Autoplay]}
            // autoplay={true}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide
                  key={index}
                  // style={{
                  //   width: "363px",
                  //   height: "341px",
                  //   background: "orange",
                  // }}
                  style={{
                    height: "auto",
                    width: "auto",
                  }}
                >
                  {({ isActive }) => (
                    <div
                      //   className={`w-[364px] h-[341px] relative rounded-3xl overflow-hidden bg-dark-blended shadow-card p-16 transition
                      // ${isActive ? " z-20  " : " scale-100 z-0 "}
                      // `}
                      className="w-[364px] h-[341px]"
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
                    </div>
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
