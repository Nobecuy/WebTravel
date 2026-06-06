import React from "react";
import Navbar from "./components/Navbar";
import HeroParallax from "./components/HeroParallax";
import WhyChooseUs from "./components/WhyChooseUs";
import TopDestinations from "./components/TopDestinations";
import FeaturedPackages from "./components/FeaturedPackages";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-background antialiased overflow-x-hidden selection:bg-secondary-container/30 selection:text-[#602500]">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section with 3D Parallax */}
      <HeroParallax />

      {/* Why Choose Us Features */}
      <WhyChooseUs />

      {/* Top Destinations Gallery */}
      <TopDestinations />

      {/* Curated Package Tours */}
      <FeaturedPackages />

      {/* Newsletter Signup Panel */}
      <Newsletter />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
