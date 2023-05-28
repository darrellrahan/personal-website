"use client";

import React, { useEffect, useRef } from "react";
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
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onPageScroll = () => {
      headerRef.current!.style.padding =
        window.pageYOffset > 20 ? "0.75rem 1.5rem" : "1.5rem";
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section id="header">
      <header
        className={`p-6 fixed inset-x-0 top-0 z-20 bg-[#0a192f99] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] flex items-center justify-between duration-300 ease-linear ${firaCode.className}`}
        style={{ backdropFilter: "blur(10px)" }}
        ref={headerRef}
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
