import { VStack } from "../stack";

const Social = ({ vertical = false }) => {
  return (
    <VStack
      className={`items-center gap-4 md:flex-row  ${vertical && "!flex-col"} `}
    >
      <a
        href="https://twitter.com/getarchetype"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/twitter.png" alt="twitter" />
      </a>
      <a
        href="https://www.linkedin.com/company/getarchetype"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/linkedin.png" alt="linkedin" />
      </a>
    </VStack>
  );
};

export default Social;
