import Link from "next/link";
import { MenuText } from "../typography";

const links = [
  {
    name: "Main",
    href: "#main",
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
    href: "#blog",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

const Nav = ({ onClose }) => {
  return (
    <nav className="flex flex-col lg:flex-row gap-6 md:gap-10 w-full  px-2">
      {links.map(({ name, href }, index) => {
        return (
          <Link href={href} key={index} onClick={onClose} passHref>
            <a>
              <MenuText>{name}</MenuText>
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
