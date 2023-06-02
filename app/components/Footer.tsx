import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function Footer() {
  return (
    <section id="footer">
      <footer className="p-6">
        <div className="flex lg:hidden justify-center gap-8">
          <a href="https://github.com/darrellrahan">
            <FiGithub className="text-[#a8b2d1] hover:text-[#64ffda] hover:-translate-y-[3px] duration-100 ease-linear text-2xl" />
          </a>
          <a href="https://www.instagram.com/darrell.rr">
            <AiOutlineInstagram className="text-[#a8b2d1] hover:text-[#64ffda] hover:-translate-y-[3px] duration-100 ease-linear text-2xl" />
          </a>
        </div>
        <p
          className={`${firaCode.className} text-xs leading-loose mt-6 text-[#a8b2d1] text-center`}
        >
          Built with pure dedication by
          <br />
          Darrell Rafa Raihan
        </p>
      </footer>
    </section>
  );
}

export default Footer;
