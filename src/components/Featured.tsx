import { featuredProducts } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen bg-[rgba(255,204,211,0.5)] text-red-500 relative">
      {/* Title */}
      <div className="  py-6">
        <h2 className="text-center text-3xl font-bold text-black">
          Check Out Our <span className="text-rose-500">Best Sellers</span>
        </h2>
      </div>

      {/* Product Grid */}
      <div className="py-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center gap-3"
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

      {/* See More Button */}
      <div className=" py-6 flex justify-center">
        <Link href="/menu">
          <button className="bg-rose-500 hover:bg-rose-600 text-white text-lg font-medium px-8 py-3 rounded-full shadow-md">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
