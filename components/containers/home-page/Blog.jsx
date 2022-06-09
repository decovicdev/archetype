import { Fragment, useState } from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

import { Button, ButtonOutline } from "@components/shared/button";
import Container from "@components/shared/container";
import { HDivider } from "@components/shared/divider";
import { HStack, VStack } from "@components/shared/stack";
import {
  Body,
  Heading,
  LargeHeading,
  SubTitle,
} from "@components/shared/typography";
import { ArrowLeft } from "@components/icons";

const Blog = ({ showBlogsPageLink = false, articles }) => {
  return (
    <Container id="blog" className="">
      <LargeHeading>Archetype Blog</LargeHeading>
      <VStack className="mt-20 gap-6 md:flex-row">
        <VStack className="items-center">
          <Image
            width={979}
            height={482}
            objectFit="cover"
            src={articles[0].imageUrl}
          />
          <VStack className="max-w-[700px] w-full gap-10 items-start -translate-y-1/4 md:-translate-y-1/4  lg:-translate-y-2/4">
            <SubTitle>{articles[0].date}</SubTitle>
            <Heading>{articles[0].title}</Heading>
            <Body>{articles[0].excerpt}</Body>
            <Link href={`/blogs/${articles[0].slug}`} passHref>
              <a>
                <ButtonOutline
                  className="flex flex-row"
                  rightIcon={<ArrowNarrowRightIcon className="h-6 w-6" />}
                >
                  Continue Reading
                </ButtonOutline>
              </a>
            </Link>
          </VStack>
        </VStack>
        <VStack className="gap-10 max-w-[517px]">
          <SubTitle>Latest Articles</SubTitle>
          {articles.slice(1, articles.length).map((article, index) => (
            <Fragment key={index}>
              <ArticleItem {...article} />
              {index < articles.length - 1 && <HDivider />}
            </Fragment>
          ))}
          {showBlogsPageLink && (
            <Link href="/blogs" passHref>
              <a>
                <Button>View all articles</Button>
              </a>
            </Link>
          )}
        </VStack>
      </VStack>
    </Container>
  );
};

const ArticleItem = (props) => {
  const { title, slug } = props;
  const [hovering, setHovering] = useState(false);
  return (
    <Link href={`/blogs/${slug}`} passHref>
      <a>
        <HStack
          className="justify-between gap-4 w-full cursor-pointer"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <Heading>{title}</Heading>
          <div>
            <ArrowLeft
              className="w-10 h-10 md:h-14 md:w-14 lg:w-24 lg:h-24"
              stroke={
                !hovering ? "url(#paint0_linear_1)" : "url(#paint0_linear_2)"
              }
            />
          </div>
        </HStack>
      </a>
    </Link>
  );
};

export default Blog;
