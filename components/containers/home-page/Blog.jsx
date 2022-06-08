import { Fragment, useState } from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
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
import { articles } from "data/mock";
import { ArrowLeft } from "@components/icons";

const Blog = ({ showBlogsPageLink = false }) => {
  const router = useRouter();
  return (
    <Container id="blog" className="">
      <LargeHeading>Archetype Blog</LargeHeading>
      <VStack className="mt-20 gap-6 md:flex-row">
        <VStack className="items-center">
          <img src="/images/article-1.png" />
          <VStack className="max-w-[700px] gap-10 items-start -translate-y-1/4 md:-translate-y-1/4  lg:-translate-y-2/4">
            <SubTitle>May 3, 2022</SubTitle>
            <Heading>Lorem ipsum dolor sit amet, consectetur</Heading>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              enim enim malesuada habitant. Risus massa tempus in mattis quisque
              in dis nisi, placerat. Nunc, varius risus neque, amet feugiat
              felis varius quis et. Curabitur in arcu duis euismod iaculis diam
              vitae scelerisque...
            </Body>
            <ButtonOutline
              className="flex flex-row"
              rightIcon={<ArrowNarrowRightIcon className="h-6 w-6" />}
            >
              Continue Reading
            </ButtonOutline>
          </VStack>
        </VStack>
        <VStack className="gap-10">
          <SubTitle>Latest Articles</SubTitle>
          {articles.map((article, index) => (
            <Fragment key={index}>
              <ArticleItem {...article} />
              {index < articles.length - 1 && <HDivider />}
            </Fragment>
          ))}
          {showBlogsPageLink && (
            <Link href="/blogs">
              <Button>View all articles</Button>
            </Link>
          )}
        </VStack>
      </VStack>
    </Container>
  );
};

const ArticleItem = (props) => {
  const { title, description } = props;
  const [hovering, setHovering] = useState(false);
  return (
    <HStack
      className="justify-between gap-4 w-full cursor-pointer"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Heading>{title}</Heading>
      <div>
        <ArrowLeft
          className="w-10 h-10 md:h-14 md:w-14 lg:w-24 lg:h-24"
          stroke={!hovering ? "url(#paint0_linear_1)" : "url(#paint0_linear_2)"}
        />
      </div>
    </HStack>
  );
};

export default Blog;
