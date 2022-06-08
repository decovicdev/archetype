import Head from "next/head";

import articles from "../../data/articles.json";
import BlogsPage from "@components/containers/blogs-page";

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
  return {
    props: {
      articles,
    },
    revalidate: 60 * 60,
  };
};

export default Blogs;
