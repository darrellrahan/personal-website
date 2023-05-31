"use client";

import React, { useEffect, useRef } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNavbar from "./components/MobileNavbar";
import Projects from "./components/Projects";
import { useTogglerContext } from "./context/toggler";

export default function Home() {
  const { mobileNavbar } = useTogglerContext();
  const blurContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    blurContentRef.current!.style.filter = mobileNavbar ? "blur(8px)" : "";
  }, [mobileNavbar]);

  return (
    <main>
      <Header />
      <MobileNavbar />
      <div ref={blurContentRef}>
        <Hero />
        <About />
        <Projects />
      </div>
    </main>
  );
}
