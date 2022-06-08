import Blog from "../home-page/Blog";
import CTA from "../home-page/CTA";
import BlogList from "./blog-list";

const BlogsPage = (props) => {
  return (
    <div className="space-y-10 md:space-y-16 lg:space-y-20 my-20 md:my-32 lg:my-40">
      <Blog />
      <BlogList articles={props.articles} />
      <CTA />
    </div>
  );
};

export default BlogsPage;
