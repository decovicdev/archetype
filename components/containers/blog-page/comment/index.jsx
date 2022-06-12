import Container from "@components/shared/container";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

const Comment = (props) => {
  const { comments } = props;
  return (
    <Container className="space-y-6">
      <CommentList comments={comments} />
      <CreateComment />
    </Container>
  );
};

export default Comment;
