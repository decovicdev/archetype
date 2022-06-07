import FeaturesDesktop from "./FeaturesDesktop";
import Container from "@components/shared/container";
import { LargeHeading } from "@components/shared/typography";
import FeaturesMobile from "./FeaturesMobile";

const Features = () => {
  return (
    <div id="features" className="mt-40">
      <Container>
        <LargeHeading>Features</LargeHeading>
        <FeaturesDesktop />
      </Container>
      <FeaturesMobile />
    </div>
  );
};

export default Features;
