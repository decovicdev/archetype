import { Button, ButtonOutline } from "../button";
import Container from "../container";
import Drawer from "../drawer";
import { MenuText } from "../typography";

const links = [
  "Main",
  "Benefits",
  "Features",
  "Blog",
  "FAQ",
  "Pricing",
  "Testimonials",
];

const Header = () => {
  return (
    <header>
      <Container>
        <nav className="flex items-center pt-6 md:pt-8 lg:pt-10 w-full justify-between px-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[143px] md:w-[238px]"
          />
          <ul className="hidden lg:flex flex-col items-center md:flex-row md:justify-between md:items-center gap-8">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href="#">
                    <MenuText>{link}</MenuText>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex gap-4">
            <Button size="s">Sign Up</Button>
            <ButtonOutline size="s">Get Started</ButtonOutline>
          </div>

          <div className="block lg:hidden">
            <Drawer />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
