import { Button, ButtonOutline } from "@components/shared/button";
import Container from "@components/shared/container";
import { HDivider } from "@components/shared/divider";
import { HStack, VStack } from "@components/shared/stack";
import {
  Body,
  Heading,
  LargeHeading,
  SubHeading,
  SubTitle,
} from "@components/shared/typography";
import { articles } from "data/mock";
import { Fragment } from "react";

const Blog = () => {
  return (
    <Container className="mt-40">
      <LargeHeading>Archetype Blog</LargeHeading>
      <VStack className="mt-20 gap-6 md:flex-row">
        <VStack className="items-center">
          <img src="/images/article-1.png" />
          <VStack className="max-w-[700px] gap-10 items-start -translate-y-1/4 md:-translate-y-2/4  xl:-translate-y-3/4">
            <SubTitle>May 3, 2022</SubTitle>
            <Heading>Lorem ipsum dolor sit amet, consectetur</Heading>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              enim enim malesuada habitant. Risus massa tempus in mattis quisque
              in dis nisi, placerat. Nunc, varius risus neque, amet feugiat
              felis varius quis et. Curabitur in arcu duis euismod iaculis diam
              vitae scelerisque...
            </Body>
            <ButtonOutline>Continue Reading</ButtonOutline>
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
          <Button>View all articles</Button>
        </VStack>
      </VStack>
    </Container>
  );
};

const ArticleItem = (props) => {
  const { title, description } = props;
  return (
    <HStack>
      <Heading>{title}</Heading>
    </HStack>
  );
};

export default Blog;
