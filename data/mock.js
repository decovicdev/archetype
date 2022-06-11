const benefits = [
  {
    title: "Integrate with our SDKs",
    description: `Archetype integrates painlessly with your existing tech stack and enables no-code adjustments to pricing, bundles, and packaging.
    
    Never worry about managing billing, invoicing, API keys, quotas, or permissions.
    
    Save your engineers months of setup and maintenance so they can focus on delivering amazing products.`,
    image: "/images/benefit-1.png",
  },
  {
    title: "Easily Create Complex Billing Models",
    description: `Use the dashboard to create subscriptions, adjust prices and gate access to premium endpoints. No redeployments required.

    Adjust quotas, metered limits and more without rearchitecting billing or rewriting code.

    Switch between subscription or usage-based models in seconds.`,
    image: "/images/benefit-2.png",
  },
  {
    title: "Automatically Optimize Pricing Models",
    description: `Leverage our insights into usage, conversion, retention and cohort segmentation to improve your product and pricing.
    
    Experiment with pricing models with our dynamic pricing system.`,
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
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis varius quis et. Curabitur in arcu duis euismod iaculis diam vitae scelerisque... ",
  },
  {
    question: "Curabitur in arcu duis euismod iaculis diam vitae scelerisque?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis varius quis et. Curabitur in arcu duis euismod iaculis diam vitae scelerisque... ",
  },
  {
    question:
      "Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis varius quis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis varius quis et. Curabitur in arcu duis euismod iaculis diam vitae scelerisque... ",
  },
  {
    question: "Curabitur in arcu duis euismod iaculis diam vitae scelerisque?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar enim enim malesuada habitant. Risus massa tempus in mattis quisque in dis nisi, placerat. Nunc, varius risus neque, amet feugiat felis varius quis et. Curabitur in arcu duis euismod iaculis diam vitae scelerisque... ",
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
