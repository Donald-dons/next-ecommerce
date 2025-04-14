"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-[#fef1f5] w-screen flex flex-col justify-center overflow-hidden pb-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:px-24 gap-20 z-15">
        {/* Left Image Container */}
        <div className="flex-1 w-full relative h-[500px] md:h-[450px] rounded-2xl shadow-xl overflow-hidden">
          <Image
            src="/blushbakes.jpg"
            alt="Blush Bakes Storefront"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center space-y-6 px-6 md:px-12">
          <h1 className="font-inter font-bold text-[40px] leading-[1] text-[#c63466]">
            Baked with love,<br />
            blushed with sweetness!
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto md:mx-0">
            A charming bakery specializing in exquisite pink-themed cakes and desserts.
            Each treat is made with love, using quality ingredients and a dash of blush
            to make every bite a sweet, heart-shaped smile.
          </p>
          <button className="bg-[#c63466] text-white text-base font-medium py-2.5 px-8 rounded-full shadow hover:bg-[#ad2b57] transition-all">
            About Us
          </button>
        </div>
      </div>

      {/* Cloud Divider */}
      <div className="absolute -bottom-6 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2880 100"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,0 
              C40,100 120,100 160,0 
              C200,100 280,100 320,0 
              C360,100 440,100 480,0 
              C520,100 600,100 640,0 
              C680,100 760,100 800,0 
              C840,100 920,100 960,0 
              C1000,100 1080,100 1120,0 
              C1160,100 1240,100 1280,0 
              C1320,100 1400,100 1440,0 
              C1480,100 1560,100 1600,0 
              C1640,100 1720,100 1760,0 
              C1800,100 1880,100 1920,0 
              C1960,100 2040,100 2080,0 
              C2120,100 2200,100 2240,0 
              C2280,100 2360,100 2400,0 
              C2440,100 2520,100 2560,0 
              C2600,100 2680,100 2720,0 
              C2760,100 2840,100 2880,0 
              L2880,100 L0,100 Z
            "
            fill="#fce7f3"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
