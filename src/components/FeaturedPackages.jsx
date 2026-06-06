import React, { useRef } from "react";
import { tripData } from "../data/tripData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FeaturedPackages() {
  const { tagline, title, packages, sectionId } = tripData.tours;
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const packageRefs = useRef([]);

  packageRefs.current = [];

  const addToRefs = (el) => {
    if (el && !packageRefs.current.includes(el)) {
      packageRefs.current.push(el);
    }
  };

  useGSAP(() => {
    // Title entrance
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Individual package animations
    packageRefs.current.forEach((row, index) => {
      const isEven = index % 2 === 0;
      const imgContainer = row.querySelector(".tour-img-container");
      const textContainer = row.querySelector(".tour-text-container");
      const img = imgContainer.querySelector("img");

      // Slide elements in from respective sides
      gsap.fromTo(
        imgContainer,
        { x: isEven ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        textContainer,
        { x: isEven ? 100 : -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Subtle parallax scroll for images inside the container
      gsap.fromTo(
        img,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id={sectionId}
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto overflow-hidden"
    >
      <div ref={titleRef} className="mb-16">
        <span className="font-label-md text-secondary uppercase tracking-widest block mb-2 font-bold">
          {tagline}
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
          {title}
        </h2>
      </div>

      <div className="space-y-gutter">
        {packages.map((pkg, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={pkg.id}
              ref={addToRefs}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } bg-surface-container-low rounded-[32px] overflow-hidden hover-card-shadow border border-outline-variant/20`}
            >
              {/* Image Container with hidden overflow for parallax */}
              <div className="tour-img-container w-full md:w-[45%] h-64 md:h-auto min-h-[350px] overflow-hidden relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  data-alt={pkg.dataAlt}
                  className="absolute inset-0 w-full h-[130%] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text / Details Container */}
              <div className="tour-text-container p-8 md:p-12 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-md font-semibold">
                    {pkg.duration}
                  </span>
                  <span className="bg-secondary-container/10 text-secondary-container px-4 py-1.5 rounded-full font-label-md font-semibold">
                    {pkg.badge}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold mb-4">
                  {pkg.title}
                </h3>
                <p className="text-on-surface-variant font-body-lg mb-8 max-w-xl leading-relaxed">
                  {pkg.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200/50">
                  <div>
                    <p className="font-label-md text-outline">From</p>
                    <p className="font-headline-sm text-primary font-bold">
                      {pkg.price}
                      <span className="text-label-md font-normal text-outline">
                        {pkg.priceSuffix}
                      </span>
                    </p>
                  </div>
                  <button className="bg-primary text-on-primary px-8 py-4 rounded-2xl font-label-md hover:bg-primary/95 hover:shadow-lg transition-all active:scale-95 duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
