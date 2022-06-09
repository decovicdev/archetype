import Image from "next/image";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

import { ButtonOutline } from "@components/shared/button";
import { VStack } from "@components/shared/stack";
import { Body, SubHeading, SubTitle } from "@components/shared/typography";

const BlogItem = (props) => {
  const { article } = props;
  return (
    <div className="mb-10 lg:mb-16 grid">
      <Image
        src={article.imageUrl}
        alt={article.title}
        width={500}
        height={254}
        objectFit="cover"
        className="rounded-xl"
      />
      <VStack className="gap-6 max-w-[min(90%,437px)] mx-auto -translate-y-10">
        <SubTitle>{article.date}</SubTitle>
        <SubHeading>{article.title}</SubHeading>
        <Body>{article.excerpt}</Body>
        <Link href={`/blogs/${article.slug}`}>
          <ButtonOutline
            className="mt-10"
            rightIcon={<ArrowNarrowRightIcon className="h-6 w-6" />}
          >
            Continue Reading
          </ButtonOutline>
        </Link>
      </VStack>
    </div>
  );
};

export default BlogItem;
