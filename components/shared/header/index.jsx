import Link from "next/link";

import { Button, ButtonOutline } from "../button";
import Container from "../container";
import Drawer from "../drawer";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="top-0 sticky z-20 bg-noisy bg-dark-100 ">
      <Container>
        <div className="flex items-center py-6 md:py-8 lg:py-10 w-full justify-between px-2">
          <Link href="/" passHref>
            <a>
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-[143px] md:w-[238px] hover:scale-95 transition duration-300 "
              />
            </a>
          </Link>
          <div className="hidden lg:block">
            <Nav />
          </div>
          <div className="hidden lg:flex gap-4">
            <Link href="/#main">
              <ButtonOutline size="s">Get Early Access</ButtonOutline>
            </Link>
          </div>

          <div className="block lg:hidden">
            <Drawer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
