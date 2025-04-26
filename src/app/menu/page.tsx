import { menu } from "@/data";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const categories = ["Cakes", "Waffles", "Macarons", "Cupcakes", "Cookies"];

const MenuPage = () => {
  return (
    <div className="scroll-smooth bg-[rgba(255,204,211,0.5)] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-[400px]">
        <Image
          src="/temporary/a2.jpg"
          alt="Hero Banner"
          layout="fill"
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold uppercase text-center px-4">
            Discover Our Baked Products
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row px-0 lg:px-0 xl:px-0 gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-[250px] bg-white p-4 min-h-fit lg:block flex flex-col items-start gap-[50px] py-[50px]">
          <div className="sticky top-24">
            <ul className="space-y-4 text-pink-700 font-semibold text-center">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href={`#${cat.toLowerCase()}`} className="hover:underline">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content Sections */}
        <main className="w-full lg:flex-1 p-6 lg:px-12 xl:px-24 space-y-24">
  {categories.map((cat) => (
    <section key={cat} id={cat.toLowerCase()}>
      {/* Category Title */}
      <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center border-b-2 border-pink-300 inline-block w-full uppercase tracking-wider">
        <span className=" border-pink-300 pb-2">{cat}</span>
      </h2>

      {/* Grid for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-50">
        {menu
          .filter((item) => item.category?.toLowerCase() === cat.toLowerCase())
          .map((item) => (
            <Link
              href={`/menu/${item.slug}`}
              key={item.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Image */}
              <div className="relative h-[300px] w-[300px] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    className="object-cover"
                  />
                )}
              </div>

              {/* Title */}
              <h2 className="font-semibold text-lg text-pink-700">
                {item.title}
              </h2>

              {/* Button */}
              <button className="px-4 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition">
                Order Now
              </button>
            </Link>
          ))}
      </div>
    </section>
  ))}
</main>
      </div>
    </div>
  );
};

export default MenuPage;
