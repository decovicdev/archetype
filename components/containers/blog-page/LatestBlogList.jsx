import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Container from "@components/shared/container";
import { Heading } from "@components/shared/typography";
import BlogItem from "../blogs-page/blog-list/BlogItem";
import { HStack } from "@components/shared/stack";
import { ArrowLeft } from "@components/icons";

const LatestBlogList = (props) => {
  const { latestArticles } = props;
  return (
    <Container className="">
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={24}
        className=""
      >
        <span slot="container-start">
          <SwiperNav />
        </span>

        {latestArticles?.map((article, index) => (
          <SwiperSlide key={index} className="max-w-[517px]">
            <BlogItem article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const SwiperNav = () => {
  const swiper = useSwiper();
  return (
    <HStack className="justify-between items-center mb-20">
      <Heading>Latest Articles</Heading>
      <HStack className="gap-10">
        <div onClick={() => swiper.slidePrev()}>
          <ArrowLeft className="w-10 h-10 md:h-14 md:w-14 lg:w-24 lg:h-24 rotate-180 hover:[stroke:url(#paint0_linear_2)]" />
        </div>
        <div onClick={() => swiper.slideNext()}>
          <ArrowLeft className="w-10 h-10 md:h-14 md:w-14 lg:w-24 lg:h-24 hover:[stroke:url(#paint0_linear_2)]" />
        </div>
      </HStack>
    </HStack>
  );
};

export default LatestBlogList;
