import Benefits from "./Benefets";
import Blog from "./Blog";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Features from "./features";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonials from "./testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Features />
      <Pricing />
      <Blog />
      <CTA />
      <FAQ />
      <Testimonials />
    </div>
  );
};

export default HomePage;
