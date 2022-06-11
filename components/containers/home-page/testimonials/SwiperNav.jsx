import { useSwiper } from "swiper/react";

import { HStack } from "@components/shared/stack";
import { ArrowLeft } from "@components/icons";

const SwiperNav = () => {
  const swiper = useSwiper();
  return (
    <HStack className="gap-10">
      <div onClick={() => swiper.slidePrev()}>
        <ArrowLeft className="w-10 h-10 md:h-14 md:w-14 lg:w-24 lg:h-24 rotate-180 hover:[stroke:url(#paint0_linear_2)]" />
      </div>
      <div onClick={() => swiper.slideNext()}>
        <ArrowLeft className="w-10 h-10 md:h-14 md:w-14 lg:w-24 lg:h-24 hover:[stroke:url(#paint0_linear_2)]" />
      </div>
    </HStack>
  );
};

export default SwiperNav;
