import { FC } from "react";

interface Props {
  title: string;
}

const Nav: FC<Props> = ({ title = "Home" }) => {
  return (
    <nav className="flex fixed top-2 right-0 left-0 w-[95vw] mx-auto bg-black bg-opacity-40 backdrop-blur-lg py-3 px-5">
      <h1 className="font-bold">{title}</h1>
    </nav>
  );
};

export default Nav;
