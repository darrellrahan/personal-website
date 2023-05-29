"use client";

import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import { useTogglerContext } from "./context/toggler";

export default function Home() {
  const { mobileNavbar } = useTogglerContext();
  const blurContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    blurContentRef.current!.style.filter = mobileNavbar ? "blur(8px)" : "";
  }, [mobileNavbar]);

  return (
    <main>
      <Header />
      <MobileNavbar />
      <div ref={blurContentRef}>
        <Hero />
        <section id="hero">
          <div className="h-screen flex items-center p-6 lg:px-60">
            <div className="flex flex-col gap-4 items-baseline">
              <h3 className={`text-[#64ffda] text-lg`}>Hi, my name is</h3>
              <div>
                <h1 className="text-[#ccd6f6] text-[2rem] leading-[2.5rem] font-bold lg:text-7xl lg:leading-[5.25rem]">
                  Darrell Rafa Raihan.
                </h1>
                <h1 className="text-[#8892b0] text-[2rem] leading-[2.5rem] font-bold lg:text-7xl lg:leading-[5.25rem]">
                  Frontend Developer.
                </h1>
              </div>
              <p className="text-[#8892b0] lg:w-[32rem]">
                Hi, I'm Darrell Rafa Raihan. A passionate frontend developer
                specializing in building exceptional digital experiences. Based
                in Bandung, Indonesia.
              </p>
              <a
                href="/"
                className={`border border-[#64ffda] text-[#64ffda] py-3.5 px-7 rounded hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px] duration-300 ease-linear mt-12`}
              >
                Learn more!
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
