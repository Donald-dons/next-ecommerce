import Image from "next/image";
import React from "react";

const SpecialOrders = () => {
  return (
    <section className="w-screen flex items-center justify-center px-4 py-10 bg-pink-100">
      <div className="max-w-6xl w-full p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT CONTAINER */}
        <div className="flex flex-col items-start justify-center gap-6 text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600 leading-tight">
            Special Orders
          </h2>
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
            Looking for a custom pink-themed cake or dessert for your special occasion? At Blush
            Bakes, we create personalized treats tailored to your vision—whether it’s a dreamy
            birthday cake, an elegant wedding centerpiece, or a unique sweet surprise. Let us bring
            your ideas to life with our signature blush-hued perfection!
          </p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
            Place An Order
          </button>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-[400px] max-w-[500px]"> {/* Ensure height is defined */}
          <div className="w-full h-full relative overflow-hidden">
            <Image
              src="/cloud1.png"  // Ensure the image is in the public directory
              alt="Pink Strawberry Cake"
              layout="fill" // 'layout="fill"' works properly with `fill` prop
              objectFit="cover" // Ensures the image fills the container while maintaining its aspect ratio
              className="z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOrders;
