import React from "react";
import { tripData } from "../data/tripData";

export default function Footer() {
  const { logoText, description, socials, columns, office, copyright, bottomLinks } = tripData.footer;

  return (
    <footer className="bg-primary pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter text-white">
        
        {/* Column 1: Brand & Socials */}
        <div className="md:col-span-1 flex flex-col justify-between">
          <div>
            <a href="#" className="font-headline-sm text-headline-sm text-secondary-container mb-6 block font-bold">
              {logoText}
            </a>
            <p className="text-white/70 font-body-md mb-8 leading-relaxed max-w-sm">
              {description}
            </p>
          </div>
          <div className="flex gap-4 mb-8 md:mb-0">
            {socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container hover:text-primary transition-all duration-300 group"
                aria-label={soc.name}
              >
                <span className="material-symbols-outlined text-base text-white group-hover:text-primary transition-colors">
                  {soc.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Columns 2 & 3: Dynamic Links */}
        {columns.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h5 className="font-label-md uppercase tracking-wider mb-2 font-bold text-secondary-container/90">
              {col.title}
            </h5>
            {col.links.map((link, lIdx) => (
              <a
                key={lIdx}
                href={link.href}
                className="text-white/70 hover:text-secondary-container transition-all duration-200 w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}

        {/* Column 4: Office Info */}
        <div className="flex flex-col gap-4">
          <h5 className="font-label-md uppercase tracking-wider mb-2 font-bold text-secondary-container/90">
            {office.title}
          </h5>
          <p className="text-white/70 font-body-md leading-relaxed whitespace-pre-line">
            {office.address}
          </p>
          <div className="text-white/70 font-body-md mt-2 flex flex-col gap-1.5">
            <a href={`tel:${office.phone}`} className="hover:text-secondary-container transition-colors w-fit">
              {office.phone}
            </a>
            <a href={`mailto:${office.email}`} className="hover:text-secondary-container transition-colors w-fit break-all">
              {office.email}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin-desktop mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 font-label-md">
        <p className="text-center md:text-left">{copyright}</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          {bottomLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-white transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
