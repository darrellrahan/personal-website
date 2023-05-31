import React from "react";
import { Fira_Code } from "next/font/google";
import { featuredProjects } from "../data/dry";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function Projects() {
  return (
    <section id="projects">
      <div className="px-6 py-28 lg:px-60 space-y-10">
        <div className="flex gap-2 items-center">
          <p className={`text-[#64ffda] ${firaCode.className} lg:text-lg`}>
            02.
          </p>
          <h1 className="text-[#ccd6f6] text-xl font-semibold lg:font-bold lg:text-2xl">
            {"<Projects"}
          </h1>
          <h1 className="text-[#ccd6f6] text-xl font-semibold lg:font-bold lg:text-2xl">
            {"/>"}
          </h1>
          <div className="w-full h-[1.5px] bg-[#233554]"></div>
        </div>

        {/* for mobile */}

        <div className="space-y-8">
          {featuredProjects.map((data) => (
            <div
              key={data.name}
              className="p-6 relative bg-[#23355435] rounded border border-[#23355475] space-y-6 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] group lg:hidden"
            >
              <div className="flex flex-col items-baseline gap-1">
                <h3 className={`text-[#64ffda] text-sm ${firaCode.className}`}>
                  Featured Project
                </h3>
                <a
                  href={data.demo}
                  target="_blank"
                  className="text-[#e6f1ff] font-bold text-xl group-hover:text-[#64ffda] duration-300 ease-linear"
                >
                  {data.name}
                </a>
              </div>
              <div>
                <p className="text-[#a8b2d1] text-sm leading-relaxed">
                  {data.desc}
                </p>
              </div>
              <div className="text-[#a8b2d1] text-sm">
                <p className={`${firaCode.className}`}>{data.tech.join(" ")}</p>
                <div className="flex items-center gap-4 mt-4">
                  <a href={data.github} target="_blank">
                    <FiGithub
                      fontSize="1.35rem"
                      className="text-[#e6f1ff] hover:text-[#64ffda] duration-100 ease-linear"
                    />
                  </a>
                  <a href={data.demo} target="_blank">
                    <FiExternalLink
                      fontSize="1.35rem"
                      className="text-[#e6f1ff] hover:text-[#64ffda] duration-100 ease-linear"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* for desktop */}
        <div className="hidden lg:block space-y-24">
          {featuredProjects.map((data) => (
            <div key={data.name} className="hidden lg:grid grid-cols-2">
              <div
                className={`group ${
                  data.imgFirst ? "order-first" : "order-last"
                }`}
              >
                <a href={data.demo} className="relative">
                  <div className="absolute inset-0 bg-[#64ffda80] rounded group-hover:bg-transparent duration-200 ease-linear"></div>
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-full h-full object-cover rounded"
                  />
                </a>
              </div>
              <div>
                <div
                  className={`flex flex-col ${
                    data.imgFirst ? "items-end" : "items-start"
                  } gap-1`}
                >
                  <h3
                    className={`text-[#64ffda] text-sm ${firaCode.className}`}
                  >
                    Featured Project
                  </h3>
                  <a
                    href={data.demo}
                    target="_blank"
                    className="text-[#ccd6f6] font-bold text-2xl hover:text-[#64ffda] duration-300 ease-linear"
                  >
                    {data.name}
                  </a>
                </div>
                <div
                  className={`shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)] p-6 rounded bg-[#112240] text-[#a8b2d1] my-6 w-[115%] ${
                    data.imgFirst
                      ? "-translate-x-20 text-right"
                      : "z-20 relative text-left"
                  }`}
                >
                  <p>{data.desc}</p>
                </div>
                <div
                  className={`flex gap-4 ${firaCode.className} ${
                    data.imgFirst ? "justify-end" : "justify-start"
                  } text-[#a8b2d1] text-sm`}
                >
                  {data.tech.map((tech) => (
                    <p key={tech}>{tech}</p>
                  ))}
                </div>
                <div
                  className={`flex items-center ${
                    data.imgFirst ? "justify-end" : "justify-start"
                  } gap-4 mt-4`}
                >
                  <a href={data.github} target="_blank">
                    <FiGithub
                      fontSize="1.35rem"
                      className="text-[#e6f1ff] hover:text-[#64ffda] duration-100 ease-linear"
                    />
                  </a>
                  <a href={data.demo} target="_blank">
                    <FiExternalLink
                      fontSize="1.35rem"
                      className="text-[#e6f1ff] hover:text-[#64ffda] duration-100 ease-linear"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
