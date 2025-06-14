'use client';

import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero"; 
import useLenis from "./hooks/useLenis";
import ContactSection from "./components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader"/>}
      </AnimatePresence>
      <Hero />

      <ContactSection />
    </div>
  );
}
