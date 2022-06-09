import Link from "next/link";
import { Button, ButtonOutline } from "../button";
import Container from "../container";
import Drawer from "../drawer";
import { MenuText } from "../typography";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center pt-6 md:pt-8 lg:pt-10 w-full justify-between px-2">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[143px] md:w-[238px]"
            />
          </Link>
          <div className="hidden lg:block">
            <Nav />
          </div>
          <div className="hidden lg:flex gap-4">
            <Button size="s">Sign Up</Button>
            <Link href="#main">
              <ButtonOutline size="s">Get Started</ButtonOutline>
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
