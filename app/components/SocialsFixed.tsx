import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function SocialsFixed() {
  return (
    <section id="socials-fixed">
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
    </section>
  );
}

export default SocialsFixed;
