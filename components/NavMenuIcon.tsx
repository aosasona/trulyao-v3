import { FC, ReactElement } from "react";

interface Props {
  url: string;
  icon: ReactElement;
}

const NavMenuIcon: FC<Props> = ({ url, icon }) => {
  return <a href={url}>{icon}</a>;
};

export default NavMenuIcon;
