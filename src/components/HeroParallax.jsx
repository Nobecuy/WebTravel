import React, { useState, useEffect, useRef } from "react";
import { tripData } from "../data/tripData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function HeroParallax() {
  const { titlePart1, titlePart2, searchWidget } = tripData.hero;
  
  const containerRef = useRef(null);
  const skyRef = useRef(null);
  const sunRef = useRef(null);
  const mountainBackRef = useRef(null);
  const titleRef = useRef(null);
  const mountainMidRef = useRef(null);
  const mountainFrontRef = useRef(null);
  const widgetRef = useRef(null);

  // States for Date Picker
  const [selectedDate, setSelectedDate] = useState({
    day: new Date().getDate(),
    month: MONTHS[new Date().getMonth()],
    year: new Date().getFullYear()
  });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // States for Travelers Counter
  const [travelers, setTravelers] = useState({
    adults: 2,
    children: 0
  });
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsDatePickerOpen(false);
        setIsTravelersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useGSAP(() => {
    // 1. Initial Load Animations
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.fromTo(skyRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .fromTo(sunRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, ease: "back.out(1.5)" }, "-=1.2")
      .fromTo([mountainBackRef.current, mountainMidRef.current, mountainFrontRef.current], 
        { y: 150, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.6, stagger: 0.15 }, 
        "-=1.8"
      )
      .fromTo(titleRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.8 }, "-=1.2")
      .fromTo(widgetRef.current, { y: 50, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, "-=0.8");

    // 2. Parallax Scroll Animations
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      }
    })
    .to(skyRef.current, { yPercent: 20, ease: "none" }, 0)
    .to(sunRef.current, { yPercent: 40, opacity: 0.2, scale: 0.85, ease: "none" }, 0)
    .to(mountainBackRef.current, { yPercent: 12, ease: "none" }, 0)
    .to(titleRef.current, { yPercent: 45, opacity: 0.1, scale: 0.92, ease: "none" }, 0)
    .to(mountainMidRef.current, { yPercent: 6, ease: "none" }, 0)
    .to(mountainFrontRef.current, { yPercent: 0, ease: "none" }, 0)
    .to(widgetRef.current, { yPercent: -15, opacity: 0, ease: "none" }, 0);

  }, { scope: containerRef });

  // Traveler increment/decrement handlers
  const adjustTravelers = (type, val) => {
    setTravelers(prev => {
      const newVal = prev[type] + val;
      if (type === "adults" && newVal < 1) return prev; // At least 1 adult
      if (type === "children" && newVal < 0) return prev; // Non-negative children
      return { ...prev, [type]: newVal };
    });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-[95vh] min-h-[750px] md:h-[100vh] w-full overflow-hidden flex items-center justify-center bg-[#011420]"
    >
      {/* LAYER 1: SKY BACKGROUND */}
      <div
        ref={skyRef}
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#011420] via-[#0b283d] to-[#1c4b6b] w-full h-full select-none"
      />

      {/* LAYER 2: GLOWING SUN / HORIZON ORB */}
      <div
        ref={sunRef}
        className="absolute left-1/2 -translate-x-1/2 bottom-[30%] w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-t from-[#ff7e39] to-[#ffd07d] blur-[40px] opacity-70 mix-blend-screen pointer-events-none z-[1]"
      />

      {/* LAYER 3: DISTANT JAGGED MOUNTAINS */}
      <div
        ref={mountainBackRef}
        className="absolute bottom-0 w-full h-[60%] z-[2] pointer-events-none select-none"
      >
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover origin-bottom"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 600V350L180 260L390 380L620 200L850 340L1080 150L1260 290L1440 180V600H0Z"
            fill="url(#mountain-back-grad)"
          />
          <defs>
            <linearGradient id="mountain-back-grad" x1="720" y1="150" x2="720" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0b2c3d" />
              <stop offset="100%" stopColor="#031622" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* LAYER 4: TITLE TEXT */}
      <div
        ref={titleRef}
        className="relative z-[3] text-center px-4 max-w-5xl select-none"
      >
        <h1 className="font-display-lg text-[44px] sm:text-[64px] md:text-[86px] leading-[1.1] text-white font-extrabold tracking-tight drop-shadow-2xl">
          {titlePart1} <br />
          <span className="italic font-playfair font-normal text-secondary-container text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-[#ffd07d]">
            {titlePart2}
          </span>
        </h1>
      </div>

      {/* LAYER 5: MIDGROUND MOUNTAINS */}
      <div
        ref={mountainMidRef}
        className="absolute bottom-0 w-full h-[50%] z-[4] pointer-events-none select-none"
      >
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover origin-bottom"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 600V420L220 320L490 440L790 280L1120 410L1440 270V600H0Z"
            fill="url(#mountain-mid-grad)"
          />
          <defs>
            <linearGradient id="mountain-mid-grad" x1="720" y1="270" x2="720" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#061c28" />
              <stop offset="100%" stopColor="#010d14" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* LAYER 6: FOREGROUND MOUNTAINS AND LAKE BASE */}
      <div
        ref={mountainFrontRef}
        className="absolute bottom-0 w-full h-[38%] z-[5] pointer-events-none select-none"
      >
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover origin-bottom"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 600V470L320 380L680 490L980 390L1280 480L1440 400V600H0Z"
            fill="#001c2b"
          />
        </svg>
      </div>

      {/* SEARCH WIDGET CONTAINER */}
      <div
        ref={widgetRef}
        className="absolute bottom-6 md:bottom-12 z-[10] w-full max-w-[90%] md:max-w-5xl px-4"
      >
        <div className="glass-effect p-5 md:p-6 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-4 items-center border border-white/20 relative">
          
          {/* Destination Field */}
          <div className="flex-1 w-full text-left">
            <label className="block font-label-md text-on-surface-variant mb-1.5 ml-4">
              Destination
            </label>
            <div className="flex items-center gap-2 bg-surface-container-lowest px-4 py-3.5 rounded-2xl border border-gray-200/40">
              <span className="material-symbols-outlined text-outline">
                location_on
              </span>
              <input
                type="text"
                placeholder="Where are you going?"
                className="bg-transparent border-none focus:outline-none focus:ring-0 w-full text-body-md font-body-md text-primary placeholder:text-outline"
              />
            </div>
          </div>

          {/* Interactive Custom Date Picker Button */}
          <div className="flex-1 w-full text-left relative">
            <label className="block font-label-md text-on-surface-variant mb-1.5 ml-4">
              Date
            </label>
            <button
              onClick={() => {
                setIsDatePickerOpen(!isDatePickerOpen);
                setIsTravelersOpen(false);
              }}
              className="flex items-center justify-between gap-2 bg-surface-container-lowest px-4 py-3.5 rounded-2xl border border-gray-200/40 w-full text-left focus:outline-none hover:bg-gray-50/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">
                  calendar_today
                </span>
                <span className="text-body-md font-body-md text-primary">
                  {selectedDate.day} {selectedDate.month} {selectedDate.year}
                </span>
              </div>
              <span className={`material-symbols-outlined text-outline transition-transform duration-200 ${isDatePickerOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>

            {/* Custom Date Picker Popup */}
            {isDatePickerOpen && (
              <div className="absolute top-[110%] left-0 w-[310px] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-4 border border-gray-200/40 z-[999] flex flex-col gap-3">
                <div className="text-center font-bold text-primary text-label-md uppercase tracking-wider py-1 border-b border-gray-100">
                  Select Month & Day
                </div>
                
                {/* Months Grid */}
                <div className="grid grid-cols-4 gap-1.5 text-center">
                  {MONTHS.map(m => (
                    <button
                      key={m}
                      onClick={() => setSelectedDate(prev => ({ ...prev, month: m }))}
                      className={`text-xs py-1.5 rounded-xl transition-all ${
                        selectedDate.month === m
                          ? "bg-secondary-container text-on-secondary-container font-bold"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                {/* Days Grid (Scrollable or simple selection) */}
                <div className="border-t border-gray-100 pt-2">
                  <div className="grid grid-cols-7 gap-1 text-center h-[140px] overflow-y-auto px-1">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                      <button
                        key={d}
                        onClick={() => {
                          setSelectedDate(prev => ({ ...prev, day: d }));
                          setIsDatePickerOpen(false); // Auto close on select day
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs mx-auto transition-all ${
                          selectedDate.day === d
                            ? "bg-primary text-white font-bold"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Custom Travelers Picker Button */}
          <div className="flex-1 w-full text-left relative">
            <label className="block font-label-md text-on-surface-variant mb-1.5 ml-4">
              Travelers
            </label>
            <button
              onClick={() => {
                setIsTravelersOpen(!isTravelersOpen);
                setIsDatePickerOpen(false);
              }}
              className="flex items-center justify-between gap-2 bg-surface-container-lowest px-4 py-3.5 rounded-2xl border border-gray-200/40 w-full text-left focus:outline-none hover:bg-gray-50/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">
                  group
                </span>
                <span className="text-body-md font-body-md text-primary">
                  {travelers.adults} Adult{travelers.adults > 1 ? "s" : ""}{travelers.children > 0 ? `, ${travelers.children} Child${travelers.children > 1 ? "ren" : ""}` : ""}
                </span>
              </div>
              <span className={`material-symbols-outlined text-outline transition-transform duration-200 ${isTravelersOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>

            {/* Custom Travelers Picker Popup */}
            {isTravelersOpen && (
              <div className="absolute top-[110%] right-0 w-[280px] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-5 border border-gray-200/40 z-[999] flex flex-col gap-4">
                <div className="text-center font-bold text-primary text-label-md uppercase tracking-wider pb-2 border-b border-gray-100">
                  Select Travelers
                </div>

                {/* Adults count */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">Adults</span>
                    <span className="text-xs text-gray-500">Age 13+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => adjustTravelers("adults", -1)}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                        travelers.adults <= 1
                          ? "border-gray-200 text-gray-300 cursor-not-allowed"
                          : "border-primary text-primary hover:bg-primary/5"
                      }`}
                      disabled={travelers.adults <= 1}
                    >
                      -
                    </button>
                    <span className="text-body-md font-bold text-primary w-4 text-center">
                      {travelers.adults}
                    </span>
                    <button
                      onClick={() => adjustTravelers("adults", 1)}
                      className="w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary/5 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children count */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">Children</span>
                    <span className="text-xs text-gray-500">Age 2 - 12</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => adjustTravelers("children", -1)}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                        travelers.children <= 0
                          ? "border-gray-200 text-gray-300 cursor-not-allowed"
                          : "border-primary text-primary hover:bg-primary/5"
                      }`}
                      disabled={travelers.children <= 0}
                    >
                      -
                    </button>
                    <span className="text-body-md font-bold text-primary w-4 text-center">
                      {travelers.children}
                    </span>
                    <button
                      onClick={() => adjustTravelers("children", 1)}
                      className="w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary/5 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Apply/Close button */}
                <button
                  onClick={() => setIsTravelersOpen(false)}
                  className="bg-primary text-white w-full py-2.5 rounded-xl text-label-md hover:bg-primary/95 transition-all active:scale-95 font-bold"
                >
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full md:w-auto self-end md:pb-1 mt-2 md:mt-0">
            <button className="w-full md:w-auto bg-secondary-container text-on-secondary-container px-10 py-4 rounded-2xl font-label-md hover:bg-secondary-container/90 hover:shadow-lg transition-all active:scale-95 duration-200 whitespace-nowrap font-bold">
              {searchWidget.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
