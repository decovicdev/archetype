const benefits = [
  {
    title: "Innovate Instantly",
    description: `Create and offer any combination of metered or subscription based plans to your customers and deploy in seconds.
    
    Create custom pricing plans and structures with specific rate limits, permissions and adjust them on the fly. No engineering resources required.
    
    Save your engineers months of setup and maintenance so they can focus on delivering amazing products.`,
    image: "/images/benefit-1.png",
  },
  {
    title: "Easily Create Complex Billing Models",
    description: `Create products that leverage per seat, GPU, storage or any other billable metric you can think of.

    Modify quotas, metered limits and more without rearchitecting billing or rewriting code.

    Get insights into what's working in real-time and optimize your pricing.
    
    `,
    image: "/images/benefit-2.png",
  },
  {
    title: "Fully self serve",
    description: `API Key generation and auth are handled by us. We manage all the infrastructure around creating, modifying and assigning plans and API Keys.
    
    Get real-time invoices automatically formatted and delivered to your customers.
    
    Fully loaded customer portals available for your customers to get insights into their usage, access to their invoices and modify their subscription settings.`,
    image: "/images/benefit-3.png",
  },
];

const pricingList = [
  {
    title: "Economy",
    price: "8.32",
    originalPrice: "",
    features: ["1 API Key", "1 Tier"],
  },
  {
    title: "Standard",
    price: "12.95",
    originalPrice: "$18.25",
    features: ["2 API Keys", "2 Tiers", "Unlimited API Calls"],
  },
  {
    title: "Premium",
    price: "24.99",
    originalPrice: "",
    features: [
      "Unlimited API Keys",
      "Unlimited Tiers",
      "Unlimited API Calls",
      "Unlimited Users",
    ],
  },
];

const features = [
  {
    setup:
      "On Archetype, it can take minutes to integrate and immediately start charging customers based on rate limits, quotas, plans, permissions and more. Analytics into your revenue are updated by minute.",
    tariffPlans:
      "We allow you to version different plans and have a dashboard that provides clear insight into what products and pricing strategies work",
    billableMetrics:
      "We let you build custom billable metrics like by CPU, GPU or # of NFT mints.",
    cost: "10 minutes 7% MTR",
    image: "/images/logo.png",
  },
  {
    setup:
      "RapidAPI is similarly easy to setup but has piss poor analytics, rate limits don't work  and you can't customize rate limits by tier or user.",
    tariffPlans:
      "RapidAPI only lets you create 3 plans and you can't customize it for different enterprise customers. you can't run price experiements.",
    billableMetrics: "Unavailable",
    cost: "20% MTR",
    image: "/images/rapid-api.png",
  },
  {
    setup:
      "With Stripe it takes multiple engineers 1+ months to build monetization for your APIs and you still have to build a ton of systems to manage rate limits, update permissions and quotas. non-technical stakeholders have to annoy engineers to do this. Stripe analytics is super surface level and only focused on overall revenue and doesn't break things down cleanly.",
    tariffPlans:
      "Stripe has a dashboard with incomplete UX and unclear systems around what's happening.",
    billableMetrics: "Unavailable",
    cost: "Months of engineering time and resources",
    image: "/images/stripe.png",
  },
];

const articles = [
  {
    title: "Sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis varius quis et. Curabitur in arcu duis euismod iaculis diam vitae scelerisque... ",
  },
  {
    title: "Curabitur in arcu duis euismod",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis varius quis et. Curabitur in arcu duis euismod iaculis diam vitae scelerisque... ",
  },
  {
    title: "Pulvinar enim enim malesuada",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis varius quis et. Curabitur in arcu duis euismod iaculis diam vitae scelerisque... ",
  },
];

const faqs = [
  {
    question: "Why use Archetype? ",
    answer:
      "Our core theses revolve around reliability, speed and ease-of-use for you and your engineers. Implementing Stripe has been the biggest challenges for most companies and we want to empower them to deploy, adjust complex bespoke plans in seconds. We also don't use API gateways so you can actually be super flexible about whatever gateway service you decide to use.",
  },
  {
    question: "What languages do you support?",
    answer:
      "We support Python, Javascript, Go and PHP SDKs at the moment. We're always building support for more so if you have an urgent SDK requirement feel free to email us: hello@archetype.dev",
  },
  {
    question:
      "How will you help us optimize our revenue?",
    answer:
      "We'll collate all insights from usage stats and cohort segmentation to figure out areas where you can improve and adjust pricing-- and we'll do this in realtime. We'll also support price experimentation for plans that go your non-enterprise customers.",
  },
  {
    question: "How easy is it to integrate Archetype into our stack?",
    answer:
      "It should take 15 minutes to fully integrate Archetype into your backend. We also have videos, docs, step-by-step guides and samples available to answer any questions! The team is also readily available to help you through a hands on approach.",
  },
];

const testimonies = [
  {
    name: "John Doe",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. ",
    image: "/images/testimonial-1.png",
  },
  {
    name: "David Smith",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. ",
    image: "/images/testimonial-1.png",
  },
  {
    name: "Emma Doe",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. ",
    image: "/images/testimonial-1.png",
  },
  {
    name: "Rose Doe",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. ",
    image: "/images/testimonial-1.png",
  },
];

const comments = [
  {
    name: "Donna Troy",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim ut laoreet morbi lectus vivamus.",
    date: "2022-01-01",
  },
  {
    name: "Doug Van",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper consectetur nibh luctus nunc, ultricies dictumst consequat cras. Leo convallis feugiat auctor volutpat. Varius dapibus tellus vel sit. Faucibus gravida nunc sodales fermentum sollicitudin consectetur eu sit.",
    date: "2022-06-09",
  },
];

export {
  benefits,
  pricingList,
  features,
  articles,
  faqs,
  testimonies,
  comments,
};
