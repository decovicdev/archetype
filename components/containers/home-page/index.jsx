import Benefits from "./Benefets";
import Blog from "./Blog";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Features from "./features";
import Hero from "./Hero";
// import Pricing from "./Pricing";
// import Testimonials from "./testimonials";

const HomePage = ({ articles }) => {
  return (
    <div className="space-y-20 md:space-y-32 lg:space-y-40 mb-20 md:32 lg:mb-40">
      <Hero />
      <Benefits />
      <Features />
      {/*<Pricing />*/}
      <FAQ />
      <CTA />
      <Blog articles={articles} showBlogsPageLink />
      {/*<Testimonials />*/}
    </div>
  );
};

export default HomePage;
