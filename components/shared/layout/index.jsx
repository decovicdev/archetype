import Link from "next/link";

import Header from "../header";
import Footer from "../footer";
import { ButtonOutline } from "../button";
import { Body, Heading, SubHeading, SubTitle } from "../typography";
import { HStack } from "../stack";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-100 bg-noisy">
      <HStack className="bg-[#00000049] justify-center py-4 text-gray-200 gap-2">
        <Body>🎉 Hey there, We're hiring! </Body>
        <SubTitle>
          <a
            href="https://jobs.archetype.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </SubTitle>
      </HStack>
      <Header />
      <main>{children}</main>
      <Footer />
      <HStack className="py-4 justify-center fixed w-full bottom-0 z-50 lg:hidden bg-dark-100">
        <Link href="/#main">
          <ButtonOutline>Get Early Access</ButtonOutline>
        </Link>
      </HStack>
    </div>
  );
};

export default Layout;
