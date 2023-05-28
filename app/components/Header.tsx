"use client";

import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { useTogglerContext } from "../context/toggler";
import { navLink } from "../data/dry";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function Header() {
  const { setMobileNavbar } = useTogglerContext();

  return (
    <section id="header">
      <header
        className={`flex items-center justify-between ${firaCode.className}`}
      >
        <a href="/" className="z-50">
          <img src="/assets/logo-light.svg" alt="logo" className="w-12" />
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {navLink.map((data, index) => (
            <a
              href={data.url}
              key={data.text}
              className="flex items-center gap-1 text-sm group"
            >
              <span className="text-[#64ffda]">0{index + 1}.</span>
              <span className="text-[#ccd6f6] group-hover:text-[#64ffda] duration-300 ease-linear">{`<${data.text} />`}</span>
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="border border-[#64ffda] text-[#64ffda] py-2 px-4 rounded hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px] duration-300 ease-linear text-sm"
          >
            Resume
          </a>
        </div>
        <button className="lg:hidden" onClick={() => setMobileNavbar(true)}>
          <BiMenuAltRight color="#64ffda" fontSize="3rem" />
        </button>
      </header>
    </section>
  );
}

export default Header;
