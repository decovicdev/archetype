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

const Nav = () => {
  return (
    <nav className="flex flex-col lg:flex-row gap-6 md:gap-10 w-full  px-2">
      {links.map((link, index) => {
        return (
          <a href="#" key={index}>
            <MenuText>{link}</MenuText>
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
