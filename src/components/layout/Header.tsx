"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

useEffect(() => {
  if (pathname === "/") {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setShowSticky(window.scrollY > heroHeight);
      }
    };
    window.scrollTo(0, 0);
    // Delay initial check to wait for images
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    setTimeout(handleScroll, 100); // optional small delay

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  } else {
    setShowSticky(true);
  }
}, [pathname]);

  return (
    <>
      <header className="bg-[image:var(--headerBackground)] lg:sticky top-0 z-50 lg:bg-[var(--primaryBlue)] lg:shadow-2xl border-b border-[var(--primaryBlue)]">
        {/* Mobile Hero */}
{pathname === "/" && (
  <div
    ref={heroRef}
    className="grid grid-cols-5 text-center overflow-hidden min-h-screen gap-5 lg:gap-15 px-5 pb-10 pt-10 lg:pt-15 lg:hidden"
  >
    <nav className="col-span-4 col-start-2 md:col-start-4  grid grid-cols-3 gap-5  text-gray-300 hover:text-white pb-10 text-xl justify-end">
      <Link href="/services">Services</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contact">Contact</Link>
    </nav>

    <Image
      src="/logo.png"
      alt="Growify Digital Logo"
      width={200}
      height={200}
      className="drop-shadow-lg col-span-5 justify-self-center"
    />

    <div className="text-[var(--primaryBlue)] pb-3 pt-1 col-span-5 ">
      <h2 className="text-[26px] font-extrabold p-1">GrowifyDigital</h2>
      <h1 className="text-[18px] font-semibold">
        Your partner in digital transformation
      </h1>
    </div>

    <div className="col-span-5 justify-self-center">
      <a
        href=""
        className="text-lg md:text-xl text-[var(--primaryBlue)] border-2 border-[var(--primaryBlue)] py-3 px-10 rounded-full font-semibold hover:bg-[var(--primaryBlue)] hover:text-white transition-colors duration-300"
      >
        Explore Solutions
      </a>
    </div>
  </div>
)}


        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-2 px-12 py-6">
          <Link href="/" className="justify-self-start grid grid-cols-3 items-center gap-5">
            <Image
              src="/secondaryLogo.png"
              alt="Growify Digital Logo"
              width={80}
              height={80}
              priority
              className="drop-shadow-lg"
            />
            <h1 className="col-span-2 text-2xl font-extrabold text-[var(--primaryBlue)]">
              GrowifyDigital
            </h1>
          </Link>

          <nav className="justify-self-end grid grid-cols-3 items-center gap-10 text-gray-300  text-lg">
            <Link href="/services" className={`${ pathname === "/services" && "text-[var(--primaryBlue)]"} hover:text-white`}>Services</Link>
            <Link href="/portfolio" className={`${ pathname === "/portfolio" && "text-[var(--primaryBlue)]"} hover:text-white`}>Portfolio</Link>
            <Link href="/contact" className={`${ pathname === "/contact" && "text-[var(--primaryBlue)]"} hover:text-white`}>Contact</Link>
          </nav>
        </div>
      </header>

      <header
        className={`lg:hidden sticky top-0 z-50 flex items-center justify-between px-5 py-4 border-b border-[var(--primaryBlue)] bg-[var(--foreground)] transition-all duration-300 ${
          showSticky ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link href="/">
          <Image
            src="/secondaryLogo.png"
            alt="Growify Digital Logo"
            width={60}
            height={60}
            className="drop-shadow-lg"
          />
        </Link>
        <nav className="flex gap-6 text-gray-300 hover:text-white text-lg">
          <Link href="/services" className={`${ pathname === "/services" && "text-[var(--primaryBlue)]"} hover:text-white`}>Services</Link>
            <Link href="/portfolio" className={`${ pathname === "/portfolio" && "text-[var(--primaryBlue)]"} hover:text-white`}>Portfolio</Link>
            <Link href="/contact" className={`${ pathname === "/contact" && "text-[var(--primaryBlue)]"} hover:text-white`}>Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
