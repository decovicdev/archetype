import { LinkIcon, BookmarkIcon, ChatAlt2Icon } from "@heroicons/react/outline";

import { HDivider } from "@components/shared/divider";
import NewsletterForm from "@components/shared/NewsletterForm";
import { HStack, VStack } from "@components/shared/stack";
import { SubTitle } from "@components/shared/typography";

const Newsletter = () => {
  return (
    <VStack className="gap-20 max-w-[410px]">
      <NewsletterForm />
      <VStack className="gap-6  w-full">
        <HDivider />
        <HStack className="items-center gap-5 w-full">
          <SubTitle>Share:</SubTitle>
          <img src="/images/twitter.png" alt="twitter" />
          <img src="/images/facebook.png" alt="facebook" />
          <img src="/images/linkedin.png" alt="linkedin" />
          <LinkIcon className="h-6 w-6" />
          <div className="flex-1" />
          <ChatAlt2Icon className="h-6 w-6" />
          <BookmarkIcon className="h-6 w-6" />
        </HStack>
        <HDivider />
      </VStack>
    </VStack>
  );
};

export default Newsletter;
