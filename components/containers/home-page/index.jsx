import Benefits from "./Benefets";
import Blog from "./Blog";
import CTA from "./CTA";
import Features from "./features";
import Hero from "./Hero";
import Pricing from "./Pricing";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Features />
      <Pricing />
      <Blog />
      <CTA />
    </div>
  );
};

export default HomePage;
