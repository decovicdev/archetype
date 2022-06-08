import CTA from "../home-page/CTA";
import Article from "./Article";
import LatestBlogList from "./LatestBlogList";

const BlogPage = (props) => {
  const { id, article, latestArticles } = props;

  return (
    <div className="space-y-10 md:space-y-16 lg:space-y-20 my-20 md:my-32 lg:my-40">
      <Article id={id} article={article} />
      <LatestBlogList latestArticles={latestArticles} />
      <CTA />
    </div>
  );
};

export default BlogPage;
