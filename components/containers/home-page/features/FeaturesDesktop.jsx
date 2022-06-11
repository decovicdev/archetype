import { HDivider } from "@components/shared/divider";
import { HStack, VStack } from "@components/shared/stack";
import { features } from "data/mock";
import { SubHeading, Body } from "@components/shared/typography";

const FeaturesDesktop = () => {
  return (
    <HStack className="mt-20 gap-6 hidden lg:flex overflow-x-auto">
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
      className={`w-[517px] shadow-card items-center gap-6 p-10 flex-1
      rounded-3xl ${isBestOffer ? "bg-noisy-primary" : "bg-noisy-lighten"}`}
    >
      <img src={image} className="my-12 h-10" />
      <HDivider />
      <SubHeading>Setup</SubHeading>
      <HDivider />
      <Body className="flex-1">{setup}</Body>
      <HDivider />
      <SubHeading>Tariff plans</SubHeading>
      <HDivider />
      <Body className="h-[84px] overflow-hidden">{tariffPlans}</Body>
      <HDivider />
      <SubHeading className="h-9 overflow-hidden">
        Custom billable metrics
      </SubHeading>
      <HDivider />
      <Body className="h-[56px] overflow-hidden">{billableMetrics}</Body>
      <HDivider />
      <SubHeading>Cost</SubHeading>
      <HDivider />
      <Body className="self-start mb-8 whitespace-pre">{cost}</Body>
    </VStack>
  );
};

export default FeaturesDesktop;
