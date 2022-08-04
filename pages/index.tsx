/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";
import About from "@components/About";
import Hero from "@components/Hero";
import OtherStuff from "@components/OtherStuff";
import SectionHeader from "@components/SectionHeader";
import Skills from "@components/Skills";
import Layout from "@defaults/Layout";
import type { NextPage } from "next";
import Footer from "@components/Footer";

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const Home: NextPage = () => {
  const scrollRef = useRef<null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 1.25,
      inertia: 1.5,
    });
  }, []);

  return (
    <Layout title="Ayodeji" description="Software Developer">
      <main
        className="mt-[13vh] lg:mt-0 w-[95vw] lg:w-5/6 mx-auto px-3 max-w-[100vw]"
        data-scroll-section
        ref={scrollRef}
      >
        <div
          data-scroll
          data-scroll-speed="5"
          data-scroll-position="top"
          data-scroll-direction="horizontal"
        >
          <Hero />
        </div>

        <div
          data-scroll
          data-scroll-speed="3"
          data-scroll-position="top"
          data-scroll-direction="vertical"
          data-scroll-delay="1"
          data-scroll-offset="15%,5%"
        >
          <About />
        </div>

        <div
          data-scroll
          data-scroll-speed="1"
          data-scroll-position="bottom"
          data-scroll-direction="horizontal"
        >
          <Skills />
        </div>

        <div
          data-scroll
          data-scroll-speed="8"
          data-scroll-position="bottom"
          data-scroll-direction="vertical"
        >
          <OtherStuff />
        </div>

        <div
          data-scroll
          data-scroll-speed="4"
          data-scroll-position="bottom"
          data-scroll-direction="vertical"
          className="lg:py-[10vh]"
        >
          <Footer />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
