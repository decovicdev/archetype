import Head from "next/head";

import BlogPage from "@components/containers/blog-page";
import { getArticle, getArticles } from "utils/articles";

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
  const articles = await getArticles();
  const paths = articles.map((article) => ({ params: { slug: article.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const latestArticles = (await getArticles())
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, 10);

  const article = await getArticle(slug);

  return {
    props: {
      article,
      latestArticles,
      slug,
    },
  };
};

export default Blog;
