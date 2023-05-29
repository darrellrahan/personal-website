import React from "react";
import { Fira_Code } from "next/font/google";
import { FiGithub } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function Hero() {
  return (
    <section id="hero">
      <div className="h-screen flex items-center p-6 lg:px-60">
        <div className="hidden lg:flex flex-col gap-6 fixed left-12 bottom-0">
          <a href="https://github.com/darrellrahan">
            <FiGithub
              fontSize="1.5rem"
              className="text-[#a8b2d1] hover:text-[#64ffda] hover:-translate-y-[3px] duration-100 ease-linear"
            />
          </a>
          <a href="https://www.instagram.com/darrell.rr">
            <AiOutlineInstagram
              fontSize="1.5rem"
              className="text-[#a8b2d1] hover:text-[#64ffda] hover:-translate-y-[3px] duration-100 ease-linear"
            />
          </a>
          <div className="w-[1.5px] mx-auto h-[5.5rem] bg-[#a8b2d1]"></div>
        </div>
        <div className="hidden lg:flex flex-col fixed -right-8 bottom-0">
          <a
            className={`${firaCode.className} text-sm tracking-[1.5px] -translate-y-28 rotate-90 text-[#a8b2d1] hover:text-[#64ffda] hover:-translate-y-[7.1875rem] duration-100 ease-linear`}
            href="mailto:drafa0609@gmail.com"
          >
            drafa0609@gmail.com
          </a>
          <div className="w-[1.5px] mx-auto h-[5.5rem] bg-[#a8b2d1]"></div>
        </div>
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
            href="/"
            className={`${firaCode.className} border border-[#64ffda] text-[#64ffda] py-3.5 px-7 rounded hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px] duration-300 ease-linear mt-12`}
          >
            Learn more!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
