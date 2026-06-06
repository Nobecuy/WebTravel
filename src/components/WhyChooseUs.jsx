import React, { useRef } from "react";
import { tripData } from "../data/tripData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function WhyChooseUs() {
  const { items, sectionId } = tripData.features;
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // Clear array refs to prevent stale refs on hot reloading
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      cardRefs.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // triggers when top of section reaches 80% viewport height
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {items.map((item, idx) => {
          const isPrimaryAccent = item.accentColor === "primary";
          return (
            <div
              key={idx}
              ref={addToRefs}
              className="text-center p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 hover-card-shadow cursor-default"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md ${
                  isPrimaryAccent
                    ? "bg-primary-container text-on-primary-container"
                    : "bg-secondary-container text-on-secondary-container"
                }`}
              >
                <span className="material-symbols-outlined text-4xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-4 text-primary font-bold">
                {item.title}
              </h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
