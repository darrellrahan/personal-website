"use client";

import React, { useEffect, useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import Projects from "./components/Projects";
import SocialsFixed from "./components/SocialsFixed";
import { useTogglerContext } from "./context/toggler";

export default function Home() {
  const { mobileNavbar } = useTogglerContext();
  const blurContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    blurContentRef.current!.style.filter = mobileNavbar ? "blur(8px)" : "";
  }, [mobileNavbar]);

  return (
    <main>
      <Header />
      <MobileNavbar />
      <section id="main-content" ref={blurContentRef}>
        <SocialsFixed />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </main>
  );
}
