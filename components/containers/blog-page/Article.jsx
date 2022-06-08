import Container from "@components/shared/container";
import { LargeHeading } from "@components/shared/typography";

const Article = (props) => {
  const { id, article } = props;
  return (
    <Container className="">
      <LargeHeading>Blog {id}</LargeHeading>
    </Container>
  );
};

export default Article;
