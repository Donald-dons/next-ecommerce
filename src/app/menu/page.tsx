import { menu } from "@/data";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const categories = ["Cakes", "Waffles", "Macarons", "Cupcakes", "Cookies"];

const MenuPage = () => {
  return (
    <div className="scroll-smooth bg-pink-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-[400px]">
        <Image
          src="/temporary/hero.jpg" // Replace this with your desired hero image
          alt="Hero Banner"
          fill
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
      <div className="flex flex-col lg:flex-row p-4 lg:px-20 xl:px-40 gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/5 lg:sticky top-24 hidden lg:block">
          <ul className="space-y-4 text-pink-700 font-semibold">
            {categories.map((cat) => (
              <li key={cat}>
                <a href={`#${cat.toLowerCase()}`} className="hover:underline">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Sections */}
        <main className="w-full lg:w-4/5 space-y-16">
          {categories.map((cat) => (
            <section key={cat} id={cat.toLowerCase()}>
              {/* Category Title */}
              <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center border-b-2 border-pink-300 inline-block w-full uppercase tracking-wider">
                {cat}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {menu
                  .filter(
                    (item) =>
                      item.category?.toLowerCase() === cat.toLowerCase()
                  )
                  .map((item) => (
                    <Link
                      href={`/menu/${item.slug}`}
                      key={item.id}
                      className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition"
                    >
                      {/* Image Section */}
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                        {item.img && (
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="font-semibold text-lg text-pink-700 mt-2">
                        {item.title}
                      </h2>

                      {/* Button */}
                      <button className="px-4 py-2 rounded-md bg-pink-600 text-white hover:bg-pink-700 transition">
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
