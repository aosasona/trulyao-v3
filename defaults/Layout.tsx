import type { FC, ReactNode } from "react";
import Meta from "@/defaults/Meta";
import Nav from "@/components/Nav";
import { firstLetterUpperCase } from "utils/capital.util";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const Layout: FC<Props> = ({ title, description, children }) => {
  const NavTitle = firstLetterUpperCase(title);

  return (
    <>
      <Meta title={title} desc={description} />
      <Nav title={NavTitle} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
