import React, { useRef } from "react";
import { tripData } from "../data/tripData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Newsletter() {
  const { tagline, title, description, placeholder, buttonText, disclaimer } = tripData.newsletter;
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useGSAP(() => {
    // Reveal container
    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.95, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Subtle infinite floating animation for background decorative orbs
    gsap.to(orb1Ref.current, {
      x: "30px",
      y: "-30px",
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(orb2Ref.current, {
      x: "-25px",
      y: "25px",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handles mock subscription
    alert("Thank you for subscribing to Voyage Luxe!");
  };

  return (
    <section ref={containerRef} className="py-section-gap px-margin-mobile relative overflow-hidden">
      <div
        ref={formRef}
        className="max-w-[1200px] mx-auto bg-primary rounded-[48px] p-8 md:p-24 relative overflow-hidden text-center shadow-2xl border border-white/5"
      >
        {/* Background Decorative Glowing Orbs */}
        <div
          ref={orb1Ref}
          className="absolute -top-24 -left-24 w-72 h-72 bg-secondary-container opacity-20 rounded-full blur-[90px] pointer-events-none"
        />
        <div
          ref={orb2Ref}
          className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary-container opacity-40 rounded-full blur-[90px] pointer-events-none"
        />

        <div className="relative z-10">
          <span className="font-label-md text-secondary-container uppercase tracking-widest block mb-4 font-bold">
            {tagline}
          </span>
          <h2 className="font-display-lg text-headline-lg text-white mb-6 font-bold">
            {title}
          </h2>
          <p className="text-white/70 font-body-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              required
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-secondary-container focus:border-transparent transition-all duration-300 outline-none backdrop-blur-sm"
              placeholder={placeholder}
            />
            <button
              type="submit"
              className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-2xl font-label-md hover:bg-secondary-container/90 hover:scale-95 transition-all shadow-lg active:scale-95 duration-300 font-bold whitespace-nowrap"
            >
              {buttonText}
            </button>
          </form>
          
          <p className="text-white/40 text-label-md mt-6">
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
