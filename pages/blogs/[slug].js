import Head from "next/head";

import BlogPage from "@components/containers/blog-page";
import { getArticle, getArticles } from "utils/articles";

const Blog = (props) => {
  return (
    <>
      <Head>
        <title>Archetype | {props.article.title} </title>
        <meta name="description" content={props.article.excerpt} />
        <meta name="twitter:card" content={props.article.title} key="twcard" />
        <meta property="og:title" content={props.article.title} key="ogtitle" />
        <meta
          property="og:description"
          content={props.article.excerpt}
          key="ogdesc"
        />
        <meta property="og:url" content={props.article.url} key="ogurl" />
        <meta property="og:image" content={props.article.image} key="ogimage" />
        <meta
          name="twitter:image"
          content={props.article.image}
          key="twimage"
        />
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
