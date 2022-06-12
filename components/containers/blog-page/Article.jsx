import Image from "next/image";
import Markdown from "markdown-to-jsx";

import Container from "@components/shared/container";
import {
  Body,
  Heading,
  SubHeading,
  SubTitle,
} from "@components/shared/typography";
import { VStack } from "@components/shared/stack";
import Newsletter from "./Newsletter";

const Wrapper = (props) => (
  <div
    className="prose prose-headings:text-white prose-purple text-white max-w-none font-[Sora] "
    {...props}
  />
);

const Article = (props) => {
  const { slug, article } = props;
  return (
    <Container className="">
      <VStack className="lg:flex-row justify-between gap-20">
        <VStack>
          <Image
            width={979}
            height={482}
            objectFit="cover"
            src={article.imageUrl}
          />
          <VStack className="max-w-[820px] w-full gap-6 lg:gap-10 items-start -translate-y-[60px] md:-translate-y-[140px]  lg:-translate-y-[200px]  ">
            <SubTitle>{article.date}</SubTitle>
            <Markdown
              options={{
                wrapper: Wrapper,
                overrides: {
                  h1: Heading,
                  h2: SubHeading,
                  p: Body,
                },
              }}
            >
              {article.content}
            </Markdown>
          </VStack>
        </VStack>
        <Newsletter />
      </VStack>
    </Container>
  );
};

export default Article;
