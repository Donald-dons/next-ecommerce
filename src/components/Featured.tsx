import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen bg-pink-100 text-red-500 relative">
      {/* Sticky Title */}
      <div className=" bg-pink-100 py-6">
        <h2 className="text-center text-3xl font-bold text-black">
          Check Out Our <span className="text-rose-500">Best Sellers</span>
        </h2>
      </div>

      {/* Scrollable Product Row */}
      <div className="overflow-x-auto py-8">
        <div className="w-max flex gap-6 px-6">
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center min-w-[250px] gap-3"
            >
              {/* Image */}
              {item.img && (
                 <div className="relative w-40 h-40 rounded-[30px] overflow-hidden shadow-md">
                 <Image
                   src={item.img}
                   alt={item.title}
                   fill
                   className="object-cover"
                 />
               </div>
              )}
             

              {/* Text Label */}
              <h3 className="text-lg font-semibold text-rose-600">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky See More Button */}
      <div className="bg-pink-100 py-6 flex justify-center">
        <button className="bg-rose-500 hover:bg-rose-600 text-white text-lg font-medium px-8 py-3 rounded-full shadow-md">
          See More
        </button>
      </div>
    </div>
  );
};

export default Featured;
