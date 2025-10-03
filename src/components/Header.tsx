"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setShowSticky(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="bg-[image:var(--headerBackground)] lg:sticky top-0 z-50 lg:bg-[var(--primaryBlue)] lg:shadow-2xl border-b border-[var(--primaryBlue)]">
        {/* Mobile Hero */}
        <div
          ref={heroRef}
          className="flex flex-col items-center text-center h-screen gap-15 px-5 pb-10 pt-15 lg:hidden justify-start"
        >
          <nav className="flex gap-8 text-gray-300 hover:text-white self-end pb-10 text-xl md:text-base">
            <a href="">Services</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
          </nav>

          <Image
            src="/logo.png"
            alt="Growify Digital Logo"
            width={200}
            height={200}
            className="drop-shadow-lg"
          />

          <div className="text-[var(--primaryBlue)] pb-3 pt-1">
            <h2 className="text-[26px] font-extrabold p-1">GrowifyDigital</h2>
            <h1 className="text-[18px] font-semibold">
              Your partner in digital transformation
            </h1>
          </div>

          <a
            href=""
            className="text-lg md:text-xl text-[var(--primaryBlue)] border-2 border-[var(--primaryBlue)] py-3 px-10 rounded-full font-semibold hover:bg-[var(--primaryBlue)] hover:text-white transition-colors duration-300"
          >
            Explore Solutions
          </a>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-between px-12 py-6">
          <div className="flex items-center gap-6">
            <Image
              src="/secondaryLogo.png"
              alt="Growify Digital Logo"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
            <h1 className="text-2xl font-extrabold text-[var(--primaryBlue)]">
              GrowifyDigital
            </h1>
          </div>

          <nav className="flex gap-10 text-gray-300 hover:text-white text-lg">
            <a href="">Services</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
          </nav>
        </div>
      </header>

      {/* Mobile sticky header after scroll — uses original colors */}
      {showSticky && (
        <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-[image:var(--headerBackground)] border-b border-[var(--primaryBlue)]">
          <Image
            src="/secondaryLogo.png"
            alt="Growify Digital Logo"
            width={60}
            height={60}
            className="drop-shadow-lg"
          />
          <nav className="flex gap-6 text-gray-300 hover:text-white text-lg">
            <a href="">Services</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
