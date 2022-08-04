import { FC, useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { AnimateSharedLayout } from "framer-motion";
import NavMenu from "./NavMenu";

interface Props {
  title: string;
}

const Nav: FC<Props> = ({ title = "Home" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex fixed top-5 right-0 left-0 w-[95vw] lg:w-5/6 justify-between items-center mx-auto bg-neutral-800 bg-opacity-40 backdrop-blur-md drop-shadow-md-lg rounded-md py-4 lg:py-6 px-8 lg:px-10">
        <div>
          <h1 className="font-extrabold text-md lg:text-2xl">{title}</h1>
        </div>
        <div className="lg:flex lg:items-center lg:gap-x-4 2xl:gap-x-8 hidden">
          <Link href="/">
            <div className="header-link" data-description="The neat homepage">
              Home
            </div>
          </Link>
          <Link href="/#about">
            <div
              className="header-link"
              data-description="What do you want to know?"
            >
              About
            </div>
          </Link>
          <Link href="/#portfolio">
            <div className="header-link" data-description="Oops, not yet 🥲">
              Portfolio
            </div>
          </Link>
          <Link href="/#other-stuff">
            <div
              className="header-link"
              data-description="Personal stuff I worked on or contributed to - not commercial projects"
            >
              Other Stuff
            </div>
          </Link>
          <Link href="/blog">
            <div
              className="header-link"
              data-description="A gateway to my mind"
            >
              Blog
            </div>
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={handleMenuClick}
            className={`${isMenuOpen ? "rotate-[90deg]" : ""}`}
          >
            <BiMenuAltRight size={22} />
          </button>
        </div>
      </nav>
      <NavMenu isVisible={isMenuOpen} toggleVisibility={handleMenuClick} />
    </>
  );
};

export default Nav;
