import { VStack } from "../stack";

const Social = ({ vertical = false }) => {
  return (
    <VStack
      className={`items-center gap-4 md:flex-row  ${vertical && "!flex-col"} `}
    >
      <img src="/images/twitter.png" alt="twitter" />
      <img src="/images/facebook.png" alt="facebook" />
      <img src="/images/linkedin.png" alt="linkedin" />
    </VStack>
  );
};

export default Social;
