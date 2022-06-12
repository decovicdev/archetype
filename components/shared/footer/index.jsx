import Contact from "../contact";
import Container from "../container";
import { HDivider, VDivider } from "../divider";
import EarlyAccessForm from "../EarlyAccessForm";
import { HStack, VStack } from "../stack";
import { Body, ButtonText } from "../typography";

const links = [
  {
    name: "Documentation",
    href: "https://docs.archetype.dev",
  },
  {
    name: "Benefits",
    href: "#benefits",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Blog",
    href: "/blogs",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  /*{
    name: "Pricing",
    href: "#pricing",
  },*/
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

const Footer = () => {
  return (
    <div className="bg-noisy-lighten overflow-hidden">
      <Container>
        <VStack className="py-20 justify-between lg:flex-row gap-10 lg:items-center">
          <HStack className="md:w-full lg:w-max">
            <VStack className="gap-10">
              <img src="/images/logo.png" alt="Archetype" loading="lazy" />
              <Body className="w-[272px] md:w-[415px] lg:w-[653px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar enim enim malesuada habitant. Risus massa tempus in
                mattis quisque in dis nisi, placerat. Nunc, varius risus neque,
                amet feugiat felis varius quis et.
              </Body>
              <EarlyAccessForm />
            </VStack>
            <div className="hidden md:flex lg:hidden justify-end w-full">
              <Nav />
            </div>
          </HStack>
          <div className=" lg:hidden w-full">
            <HDivider />
          </div>
          <div className="hidden lg:block h-[340px]">
            <VDivider />
          </div>
          <HStack className="gap-10 w-full lg:w-max lg:flex-col">
            <div className="block md:hidden lg:block">
              <Nav />
            </div>
            <VStack className="gap-6 md:gap-8 lg:gap-10 items-end  justify-between w-full md:flex-row lg:flex-col">
              <Contact />
            </VStack>
          </HStack>
        </VStack>
        <HDivider />
        <p className="py-4 text-center">© 2022 Archetype</p>
      </Container>
    </div>
  );
};

const Nav = () => {
  return (
    <VStack className="gap-4 lg:flex-row">
      {links.map(({ name, href }, index) => (
        <a key={index} href={href}>
          <ButtonText>{name}</ButtonText>
        </a>
      ))}
    </VStack>
  );
};

export default Footer;
