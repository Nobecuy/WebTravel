import React, { useState, useEffect, useRef } from "react";
import { tripData } from "../data/tripData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const { logoText, links, buttonText } = tripData.navbar;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuTimelineRef = useRef(null);

  // Monitor scroll for header background transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for mobile menu drawer
  useGSAP(() => {
    if (!mobileMenuRef.current) return;
    
    // Set initial state
    gsap.set(mobileMenuRef.current, { y: "-100%", opacity: 0 });
    
    menuTimelineRef.current = gsap.timeline({ paused: true })
      .to(mobileMenuRef.current, {
        y: "0%",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out"
      });
  }, { scope: mobileMenuRef });

  useEffect(() => {
    if (menuTimelineRef.current) {
      if (isMobileMenuOpen) {
        menuTimelineRef.current.play();
      } else {
        menuTimelineRef.current.reverse();
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 shadow-md py-4 backdrop-blur-md border-b border-gray-200/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-margin-desktop flex justify-between items-center">
          <a
            href="#"
            className={`font-display-lg text-headline-sm font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            {logoText}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`font-label-md transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full ${
                  link.active
                    ? "text-secondary after:w-full after:bg-secondary"
                    : isScrolled
                    ? "text-on-background hover:text-secondary after:bg-secondary"
                    : "text-white hover:text-secondary-container after:bg-secondary-container"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-label-md hover:scale-95 transition-all duration-300 shadow-md shadow-secondary-container/20">
              {buttonText}
            </button>
          </nav>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 flex flex-col pt-24 pb-10 px-6 md:hidden pointer-events-auto"
        style={{ transform: "translateY(-100%)" }}
      >
        <nav className="flex flex-col gap-6 text-center">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-headline-sm font-headline-sm text-primary hover:text-secondary py-2 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-label-md hover:scale-95 transition-all duration-300 shadow-lg mt-4 self-center w-full max-w-[280px]"
          >
            {buttonText}
          </button>
        </nav>
      </div>
    </>
  );
}
