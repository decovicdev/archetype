import Head from "next/head";
import Script from "next/script";

import HomePage from "@components/containers/home-page";
import { getArticles } from "utils/articles";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Archetype | Home</title>
        <meta
          name="twitter:card"
          content="Updates, memes and all things APIs and programming from Archetype"
          key="twcard"
        />
        <meta
          property="og:title"
          content="Archetype - Billing Infrastructure for APIs"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="We help companies monetize APIs and experiment with pricing models  by managing their billing infrastructure. Never worry about managing users' quotas and privileges."
          key="ogdesc"
        />
        <link rel="preload" as="image" href="/images/hero.png" />
      </Head>
      <HomePage articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const articles = (await getArticles()).slice(0, 4);

  return {
    props: {
      articles,
    },
  };
};
