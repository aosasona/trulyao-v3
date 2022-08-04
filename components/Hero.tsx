/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroHeader from "./HeroHeader";

const Hero = () => {
  return (
    <section className="lg:h-screen lg:flex lg:items-center lg:justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
          <div className="w-full px-1 max-w-full">
            <HeroHeader>Software</HeroHeader>
            <HeroHeader>Developer.</HeroHeader>
          </div>
          <div className="w-full hero-quote px-1">
            <p className="text-faded my-6 lg:my-8">
              In a very real sense, we are all aliens on a strange planet. We
              spend most of our lives reaching out and trying to communicate. If
              during our whole lifetime, we could reach out and really
              communicate with just two people, we are indeed very fortunate.
            </p>
            <div className="flex items-center text-primary gap-3 mb-3 lg:mb-0">
              <div className="w-16 bg-primary h-[2px]" />
              Gene Roddenberry
            </div>
          </div>
          <a
            href="mailto:osasonaayodeji1@gmail.com"
            className="hero-cta flex items-center justify-center lg:justify-start text-center text-sm lg:mb-0"
          >
            <span>Say Hi</span>
            <span className="hero-cta-line" />
            <span>👋</span>
          </a>
        </div>
        <div className="relative hero-image mx-auto">
          <img src="/images/preview.jpg" alt="Ayodeji Osasona" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;