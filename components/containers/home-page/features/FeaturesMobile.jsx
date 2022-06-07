import { HDivider } from "@components/shared/divider";
import { VStack } from "@components/shared/stack";
import { Body, SubHeading, SubTitle } from "@components/shared/typography";
import { features } from "data/mock";

features[0].image = "/images/logo-gradient.png";

const FeaturesMobile = () => {
  return (
    <div className="overflow-x-scroll lg:hidden pb-5 ">
      <div className="grid [grid-template-columns:_repeat(4,175px)] mx-0 md:mx-10 lg:mx-5 w-max md:[grid-template-columns:_repeat(4,214px)] p-6 md:p-10 gap-6 shadow-card md:rounded-3xl bg-noisy-lighten mt-10 border-stroke">
        <SubTitle>Features</SubTitle>
        {features.map((feature, index) => (
          <VStack className="gap-6" key={index}>
            <img src={feature.image} className="h-6" />
            <HDivider />
          </VStack>
        ))}
        <SubHeading>Setup</SubHeading>
        {features.map((feature, index) => (
          <VStack className="gap-6" key={index}>
            <Body className="flex-1">{feature.setup}</Body>
            <HDivider />
          </VStack>
        ))}

        <SubHeading>Tariff plans</SubHeading>
        {features.map((feature, index) => (
          <VStack className="gap-6 justify-between" key={index}>
            <Body>{feature.tariffPlans}</Body>
            <HDivider />
          </VStack>
        ))}
        <SubHeading>Custom billable metrics</SubHeading>
        {features.map((feature, index) => (
          <VStack className="gap-6 justify-between " key={index}>
            <Body>{feature.billableMetrics}</Body>
            <HDivider />
          </VStack>
        ))}
        <SubHeading>Cost</SubHeading>
        {features.map((feature, index) => (
          <Body key={index} className="self-start">
            {feature.cost}
          </Body>
        ))}
      </div>
    </div>
  );
};

export default FeaturesMobile;
