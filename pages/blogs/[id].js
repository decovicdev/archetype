import Head from "next/head";

import articles from "../../data/articles.json";
import BlogPage from "@components/containers/blog-page";

const Blog = (props) => {
  return (
    <>
      <Head>
        <title>Archetype | Blog </title>
      </Head>
      <BlogPage {...props} />
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = articles.map((article) => ({
    params: {
      id: article.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const article = articles.find((article) => article.id === parseInt(id));

  const latestArticles = articles;

  return {
    props: {
      article,
      latestArticles,
      id,
    },
    revalidate: 60 * 60,
  };
};

export default Blog;
