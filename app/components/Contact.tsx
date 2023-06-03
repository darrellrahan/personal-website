import React from "react";
import { Fira_Code } from "next/font/google";
import { RevealWrapper } from "next-reveal";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firacode",
});

function Contact() {
  return (
    <section id="contact">
      <RevealWrapper origin="bottom" delay={500}>
        <div className="px-6 pt-16 lg:pt-24 pb-24 lg:pb-32">
          <div className="flex flex-col items-center text-center gap-4 lg:gap-6">
            <h3 className={`${firaCode.className} text-[#64ffda]`}>
              03. What's Next?
            </h3>
            <h1 className="text-[#ccd6f6] font-bold text-4xl lg:text-[3.25rem]">
              Get In Touch
            </h1>
            <p className="text-[#8892b0] lg:text-lg">
              I'm currently looking for any new opportunities, my inbox is
              always open.
              <br />
              Don't be shy! Hit me up!
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="mailto:drafa0609@gmail.com"
              className={`${firaCode.className} border border-[#64ffda] text-[#64ffda] py-4 px-8 text-sm rounded hover:shadow-[4px_4px_0_0_#64ffda] hover:-translate-x-[5px] hover:-translate-y-[5px] duration-300 ease-linear`}
            >
              Say Hello
            </a>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}

export default Contact;
