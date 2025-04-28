import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpecialOrders = () => {
  return (
    <section className="w-full flex items-center justify-center px-4 py-20 bg-[rgba(255,204,211,0.5)] overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* TEXT CONTAINER */}
        <div className="flex flex-col items-start justify-center gap-6 text-left px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-rose-600 leading-tight">
            Special Orders
          </h2>
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
            Looking for a custom pink-themed cake or dessert for your special occasion? At Blush
            Bakes, we create personalized treats tailored to your vision—whether it’s a dreamy
            birthday cake, an elegant wedding centerpiece, or a unique sweet surprise. Let us bring
            your ideas to life with our signature blush-hued perfection!
          </p>
          <Link href="/special_orders">
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
              Place An Order
            </button>
          </Link>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="flex justify-center items-center relative -mt-16">
          <div className="relative w-[480px] h-[480px]">
            <svg viewBox="0 0 600 500" className="w-full h-full">
              <defs>
                <clipPath id="cloudClip" clipPathUnits="userSpaceOnUse">
                  <circle cx="160" cy="250" r="120" />
                  <circle cx="300" cy="220" r="140" />
                  <circle cx="460" cy="260" r="110" />
                  <circle cx="360" cy="360" r="130" />
                  <circle cx="200" cy="380" r="110" />
                </clipPath>
              </defs>

              <foreignObject width="100%" height="100%" clipPath="url(#cloudClip)">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0">
                    <Image
                      src="/cloud1.png" // ← file path ito
                      alt="Pink Strawberry Cake"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialOrders;
