import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";

import Container from "@components/shared/container";
import { HStack, VStack } from "@components/shared/stack";
import { testimonies } from "data/mock";

import "swiper/css";
import { ArrowLeft } from "@components/icons";
import TestimonyListTablet from "./TestimonyListTablet";
import TestimonyListMobile from "./TestimonyListMobile";
import TestimonyListDesktop from "./DesktopTestimonyList";
//`${isActive ? "w-[653px] h-[568px]" : "z-0"} w-[518px] mx-auto h-[454px] overflow-hidden rounded-3xl shadow-card bg-dark-blended p-16 transition-all duration-300`;

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
