"use client";

import React, { useEffect, useRef } from "react";
import Archive from "../components/Archive";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import SocialsFixed from "../components/SocialsFixed";
import { useTogglerContext } from "../context/toggler";

function Home() {
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
        <Archive />
        <Footer />
      </section>
    </main>
  );
}

export default Home;
