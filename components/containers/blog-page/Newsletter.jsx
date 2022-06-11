import { useEffect, useState } from "react";
import { LinkIcon } from "@heroicons/react/outline";
import { useClipboard } from "@chakra-ui/react";

import { HDivider } from "@components/shared/divider";
import NewsletterForm from "@components/shared/NewsletterForm";
import { HStack, VStack } from "@components/shared/stack";
import { SubTitle } from "@components/shared/typography";

const Newsletter = () => {
  const [url, setUrl] = useState("");
  const { hasCopied, onCopy } = useClipboard(url);

  const openWindow = (url, context) => () => {
    window.open(url, context, "height=350,width=600,top=200,left=400");
  };

  useEffect(() => {
    setUrl(window.location.href);
    // setUrl(
    //   "https://deploy-preview-3--archetype-landing-page.netlify.app/blogs/how-scale-up-your-business"
    // );
  }, []);

  return (
    <VStack className="gap-20 max-w-[410px]">
      <NewsletterForm />
      <VStack className="gap-6  w-full">
        <HDivider />
        <HStack className="items-center gap-5 w-full">
          <SubTitle>Share:</SubTitle>
          <button
            onClick={openWindow(
              "https://twitter.com/intent/tweet?text=" + url,
              "twitter-popup"
            )}
          >
            <img src="/images/twitter.png" alt="twitter" />
          </button>
          <button
            onClick={openWindow(
              "https://www.facebook.com/sharer/sharer.php?u=" + url,
              "facebook-popup"
            )}
          >
            <img src="/images/facebook.png" alt="facebook" />
          </button>

          <button
            onClick={openWindow(
              "https://www.linkedin.com/shareArticle?mini=true&url=" + url,
              "linkedin-popup"
            )}
          >
            <img src="/images/linkedin.png" alt="linkedin" />
          </button>
          <div className="flex-1" />
          <button onClick={onCopy}>
            {hasCopied ? "Copied" : <LinkIcon className="h-6 w-6" />}
          </button>
        </HStack>
        <HDivider />
      </VStack>
    </VStack>
  );
};

export default Newsletter;
