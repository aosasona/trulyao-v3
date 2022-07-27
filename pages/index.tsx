import Dummy from "@/components/Dummy";
import Meta from "@/defaults/Meta";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <Meta title="Home" desc="This is a description" />
      Hello World!
      <h1 className="text-6xl my-5">Tailwind is working</h1>
      <Dummy />
    </div>
  );
};

export default Home;
