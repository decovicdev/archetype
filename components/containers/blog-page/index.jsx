import { comments } from "data/mock";
import CTA from "../home-page/CTA";
import Article from "./Article";
import Comment from "./comment";
import LatestBlogList from "./LatestBlogList";

const BlogPage = (props) => {
  const { slug, article, latestArticles } = props;

  return (
    <div className="space-y-10 md:space-y-16 lg:space-y-20 my-20 md:my-32 lg:my-40">
      <Article slug={slug} article={article} />
      {/*<Comment comments={comments} />*/}
      <LatestBlogList latestArticles={latestArticles} />
      <CTA />
    </div>
  );
};

export default BlogPage;
