import React, { useRef } from "react";
import { tripData } from "../data/tripData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TopDestinations() {
  const { tagline, title, viewAllText, viewAllLink, items, sectionId } = tripData.destinations;
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(() => {
    // Reveal header
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Stagger reveal cards
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="bg-surface-container-lowest py-section-gap overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Row */}
        <div
          ref={headerRef}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <span className="font-label-md text-secondary uppercase tracking-widest block mb-2 font-bold">
              {tagline}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              {title}
            </h2>
          </div>
          <a
            href={viewAllLink}
            className="hidden md:flex items-center gap-2 text-primary font-label-md border-b-2 border-primary pb-1 group hover:text-secondary hover:border-secondary transition-colors duration-300"
          >
            {viewAllText}
            <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform duration-300">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Card Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter"
        >
          {items.map((dest, idx) => (
            <div
              key={idx}
              ref={addToRefs}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] hover-card-shadow cursor-pointer"
            >
              {/* Image with zoom effect */}
              <img
                src={dest.image}
                alt={dest.name}
                data-alt={dest.dataAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Card Content */}
              <div className="absolute bottom-0 p-6 w-full text-on-primary z-10 flex flex-col justify-end">
                <div className="flex justify-between items-end mb-2">
                  <h4 className="font-headline-sm font-bold tracking-tight text-white group-hover:text-secondary-container transition-colors">
                    {dest.name}
                  </h4>
                  <div className="flex items-center gap-1 text-secondary-container">
                    <span
                      className="material-symbols-outlined text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-label-md text-white font-bold">{dest.rating}</span>
                  </div>
                </div>
                <p className="font-label-md text-white/80">
                  Starting from{" "}
                  <span className="text-secondary-container text-body-lg font-bold ml-1">
                    {dest.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
