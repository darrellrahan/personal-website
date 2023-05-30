"use client";

import React from "react";
import { useTogglerContext } from "../context/toggler";
import { IoCloseOutline } from "react-icons/io5";
import { navLink } from "../data/dry";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function MobileNavbar() {
  const { mobileNavbar, setMobileNavbar } = useTogglerContext();

  return (
    <section id="mobile-navbar">
      <div
        className={`fixed z-30 bg-[#0a192f]/70 inset-y-0 right-0 duration-300 ease-linear ${
          mobileNavbar ? "left-0" : "left-[150%]"
        } ${firaCode.className}`}
      >
        <div
          onClick={() => setMobileNavbar(false)}
          className="absolute inset-y-0 left-0 right-[17.395rem] z-20"
        ></div>
        <div className="absolute inset-0 bg-[#112240] z-30 flex items-center justify-center">
          <a
            href="/"
            onClick={() => setMobileNavbar(false)}
            className="absolute top-6 left-6"
          >
            <img src="/assets/logo-light.svg" alt="logo" className="w-12" />
          </a>
          <button
            onClick={() => setMobileNavbar(false)}
            className="absolute top-6 right-6"
          >
            <IoCloseOutline color="#64ffda" fontSize="2.75rem" />
          </button>
          <div className="flex items-center flex-col gap-8">
            {navLink.map((data, index) => (
              <a
                onClick={() => setMobileNavbar(false)}
                href={data.url}
                key={data.text}
                className="flex flex-col items-center gap-1 text-lg group"
              >
                <span className="text-[#64ffda]">0{index + 1}.</span>
                <span className="text-[#ccd6f6] group-hover:text-[#64ffda] duration-300 ease-linear">{`<${data.text} />`}</span>
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-[#64ffda] text-[#64ffda] py-3 px-12 mt-6 rounded hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px] duration-300 ease-linear"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileNavbar;
