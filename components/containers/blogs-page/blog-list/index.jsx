import Container from "@components/shared/container";
import { Heading } from "@components/shared/typography";

import BlogItem from "./BlogItem";

const BlogList = (props) => {
  const { articles } = props;
  return (
    <Container className="">
      <Heading className="mb-20">All Articles</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {articles?.map((article) => (
          <BlogItem key={article.id} article={article} />
        ))}
      </div>
    </Container>
  );
};

export default BlogList;
