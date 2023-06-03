import React from "react";
import { archiveProjects } from "../data/dry";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Fira_Code } from "next/font/google";
import { RevealWrapper } from "next-reveal";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function Archive() {
  return (
    <section id="archive">
      <div className="p-6 lg:px-60 my-28 lg:my-40">
        <RevealWrapper origin="bottom" delay={500}>
          <h1 className="text-[#ccd6f6] font-bold text-3xl lg:text-6xl">
            Archive
          </h1>
          <p
            className={`text-sm text-[#64ffda] mt-2 lg:mt-6 lg:text-base ${firaCode.className}`}
          >
            A big list of things I've worked on
          </p>
        </RevealWrapper>
        <RevealWrapper origin="top" delay={500}>
          <table className="w-full mt-8 lg:mt-16">
            <thead>
              <tr className="text-[#8892b0] text-left">
                <th className="py-3 px-2 lg:px-4">Title</th>
                <th className="hidden lg:inline-block py-3 px-2 lg:px-4">
                  Built with
                </th>
                <th className="py-3 px-2 lg:px-4">Link</th>
              </tr>
            </thead>
            <tbody>
              {archiveProjects.map((data) => (
                <tr key={data.name} className="hover:bg-[#112240] items-center">
                  <td className="text-[#ccd6f6] text-[1.05rem] font-bold py-3 px-2 lg:px-4">
                    {data.name}
                  </td>
                  <td
                    className={`${firaCode.className} hidden lg:inline-block text-[#8892b0] py-3 px-2 lg:px-4 text-xs`}
                  >
                    {data.tech.join(" · ")}
                  </td>
                  <td className="py-3 px-2 lg:px-4">
                    <div className="flex gap-2 items-center">
                      <a href={data.demo} target="_blank">
                        <FiExternalLink
                          fontSize="1.35rem"
                          className="text-[#8892b0] hover:text-[#64ffda] duration-100 ease-linear"
                        />
                      </a>
                      <a href={data.github} target="_blank">
                        <FiGithub
                          fontSize="1.35rem"
                          className="text-[#8892b0] hover:text-[#64ffda] duration-100 ease-linear"
                        />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default Archive;
