import { FC, ReactNode, useEffect, useRef } from "react";
import Meta from "@defaults/Meta";
import Nav from "@components/Nav";
import { firstLetterUpperCase } from "@utils/capital.util";
import Footer from "@components/Footer";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const Layout: FC<Props> = ({ title, description, children }) => {
  const NavTitle = firstLetterUpperCase(title);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 1.55,
      inertia: 1.5,
      offset: ["50%", 0],
    });
  }, []);

  return (
    <>
      <Meta title={title} desc={description} />
      <Nav title={NavTitle} />
      <div ref={scrollRef} className="lg:mb-10">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
