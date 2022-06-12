import { Button } from "@components/shared/button";
import { VStack } from "@components/shared/stack";

const CreateComment = () => {
  return (
    <VStack className="gap-5 md:gap-8 lg:gap-10 max-w-[982px]">
      <textarea
        placeholder="Write a comment"
        className="bg-[rgba(255,255,255,0.08)] p-4 rounded-lg resize-none w-full h-[160px] "
      />
      <Button>Send</Button>
    </VStack>
  );
};

export default CreateComment;
