"use client";

import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import MobileNavbar from "./components/MobileNavbar";
import { useTogglerContext } from "./context/toggler";

export default function Home() {
  const { mobileNavbar } = useTogglerContext();
  const blurContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    blurContentRef.current!.style.filter = mobileNavbar ? "blur(8px)" : "";
  }, [mobileNavbar]);

  return (
    <main className="p-8">
      <Header />
      <MobileNavbar />
      <div ref={blurContentRef}></div>
    </main>
  );
}
