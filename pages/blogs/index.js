import Head from "next/head";

import BlogsPage from "@components/containers/blogs-page";
import { getArticles } from "utils/articles";

const Blogs = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Archetype | Blogs</title>
      </Head>
      <BlogsPage articles={articles} />
    </>
  );
};

export const getStaticProps = async () => {
  const articles = (await getArticles()).sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return {
    props: {
      articles,
    },
  };
};

export default Blogs;
