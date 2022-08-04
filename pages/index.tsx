/* eslint-disable @next/next/no-img-element */
import About from "@components/About";
import Hero from "@components/Hero";
import OtherStuff from "@components/OtherStuff";
import SectionHeader from "@components/SectionHeader";
import Skills from "@components/Skills";
import Layout from "@defaults/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout title="Ayodeji" description="Software Developer">
      <main className="mt-[13vh] lg:mt-0 w-[95vw] lg:w-5/6 mx-auto px-3 max-w-[100vw]">
        <Hero />
        <About />
        <Skills />
        <OtherStuff />
      </main>
    </Layout>
  );
};

export default Home;
