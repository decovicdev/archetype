import { HDivider } from "@components/shared/divider";
import { HStack, VStack } from "@components/shared/stack";
import { Body, Heading, SubHeading } from "@components/shared/typography";
import dayjs from "../../../../constants/dayjs";

const CommentList = (props) => {
  const { comments } = props;
  return (
    <div className="max-w-[982px]">
      <Heading>Comments</Heading>
      <VStack className="gap-6 mt-10">
        {comments?.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </VStack>
    </div>
  );
};

const CommentItem = (props) => {
  const { comment } = props;
  return (
    <VStack className="bg-dark-blended shadow-card p-5 md:p-8 lg:p-10 gap-5 lg:gap-6 rounded-3xl w-full">
      <HStack className="gap-6 justify-between w-full items-center">
        <SubHeading>{comment.name.substr(0, 7)}</SubHeading>
        <Body>{dayjs(comment.date).fromNow()}</Body>
      </HStack>
      <HDivider />
      <Body>{comment.message}</Body>
    </VStack>
  );
};

export default CommentList;
