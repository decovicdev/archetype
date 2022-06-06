import { HDivider } from "@components/shared/divider";
import { HStack, VStack } from "@components/shared/stack";
import { features } from "data/mock";

const {
  LargeHeading,
  SubHeading,
  Body,
} = require("@components/shared/typography");

const FeaturesDesktop = () => {
  return (
    <HStack className="mt-20 gap-6 hidden lg:flex">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} index={index} />
      ))}
    </HStack>
  );
};

const FeatureItem = (props) => {
  const { image, setup, tariffPlans, billableMetrics, cost, index } = props;
  const isBestOffer = index === 0;
  return (
    <VStack
      className={`w-[517px] shadow-card items-center gap-6 p-10
      rounded-3xl ${isBestOffer ? "bg-noisy-primary" : "bg-noisy-lighten"}`}
    >
      <img src={image} className="my-12" />
      <HDivider />
      <SubHeading>Setup</SubHeading>
      <HDivider />
      <Body className="flex-1">{setup}</Body>
      <HDivider />
      <SubHeading>Tariff plans</SubHeading>
      <HDivider />
      <Body>{tariffPlans}</Body>
      <HDivider />
      <SubHeading>Custom billable metrics</SubHeading>
      <HDivider />
      <Body>{billableMetrics}</Body>
      <HDivider />
      <SubHeading>Cost</SubHeading>
      <HDivider />
      <Body className="self-start mb-8">{cost}</Body>
    </VStack>
  );
};

export default FeaturesDesktop;
