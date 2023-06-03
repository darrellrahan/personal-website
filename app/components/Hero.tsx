import React from "react";
import { Fira_Code } from "next/font/google";
import { RevealWrapper } from "next-reveal";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function Hero() {
  return (
    <section id="hero">
      <RevealWrapper origin="top">
        <div className="h-screen flex items-center p-6 lg:px-60">
          <div className="flex flex-col gap-4 items-baseline">
            <h3 className={`${firaCode.className} text-[#64ffda] text-lg`}>
              Hi, my name is
            </h3>
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
              specializing in building exceptional digital experiences. Based in
              Bandung, Indonesia.
            </p>
            <a
              href="#about"
              className={`${firaCode.className} border border-[#64ffda] text-[#64ffda] py-3.5 px-7 rounded hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px] duration-300 ease-linear mt-12`}
            >
              Read more!
            </a>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}

export default Hero;
