import React from "react";
import { Fira_Code } from "next/font/google";
import { RevealWrapper } from "next-reveal";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function About() {
  return (
    <section id="about">
      <RevealWrapper origin="bottom" delay={500}>
        <div className="lg:h-screen p-6 lg:py-28 lg:px-60 grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-0 gap-12">
          <div>
            <div className="flex gap-2 items-center">
              <p className={`text-[#64ffda] ${firaCode.className} lg:text-lg`}>
                01.
              </p>
              <h1 className="text-[#ccd6f6] text-xl font-semibold lg:font-bold lg:text-[1.7rem] flex gap-1.5">
                <span>About</span>
                <span>Me</span>
              </h1>
              <div className="w-full h-[1.5px] bg-[#233554]"></div>
            </div>
            <div className="text-[#8892b0] space-y-4 mt-8">
              <p>
                Hello! My name is Darrell and I enjoy creating things that live
                on the internet. My interest in programming started back in 2022
                when I decided to learn about C# for my high school assignment!
              </p>
              <p>
                Fast-forward to today, I possess an impressive arsenal of skills
                in HTML, CSS, JavaScript, TypeScript, React, Next.js, and
                Tailwind. I excel in maintaining responsive websites that offer
                a smooth user experience.
              </p>
              <p>
                My expertise lies in writing clean and optimized code and
                utilizing cutting-edge development tools and techniques. I am
                also a team player who thrives in collaborating with
                cross-functional teams to produce outstanding web applications.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <div
                className={`grid grid-cols-2 gap-2 ${firaCode.className} text-sm`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Tailwind</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>HTML & CSS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[14.5rem] h-[14.5rem] lg:w-[18.75rem] lg:h-[18.75rem] relative group">
            <img
              src="/assets/myself.png"
              alt="Pic of Myself"
              className="w-full h-full object-cover object-[50%] duration-200 ease-linear group-hover:-translate-y-[3px] group-hover:-translate-x-[3px] rounded"
            />
            <div className="absolute inset-0 bg-[#64ffda99] rounded group-hover:bg-transparent z-10 duration-200 ease-linear"></div>
            <div className="absolute top-4 left-4 border-2 border-[#64ffda] rounded w-full h-full -z-50 group-hover:translate-y-[3px] group-hover:translate-x-[3px] duration-200 ease-linear"></div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}

export default About;
