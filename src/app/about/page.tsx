import React from "react";
import Link from "next/link"; // ✅ Add link
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="about-page p-8 bg-[#FFFAFA]">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-full max-w-[1240px] h-[600px] rounded-[40px] overflow-hidden bg-pink-50 mx-auto mt-7">
            <Image
              src="/frame3.png"
              alt="Blush Bakes Storefront"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="font-inter font-bold text-[40px] leading-[100%] tracking-[0%] text-pink-600 mt-8 mb-4">
            About Us
          </h1>
          <p className="text-lg font-inter font-normal leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Welcome to Blush Bakes, where every treat is as delightful as it is beautiful!
            Specializing in pink-themed cakes and pastries, we bring sweetness and elegance to
            every bite. Our creations are crafted with love, using the finest ingredients to ensure
            both stunning aesthetics and irresistible flavors. Whether it’s a birthday, wedding, or
            just a craving for something special, Blush Bakes is here to add a touch of pink
            perfection to your moments.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex-1">
            <h2 className="font-inter font-bold text-[40px] leading-[100%] tracking-[0%] text-pink-600 mb-4">
              Our Mission
            </h2>
            <p className="text-lg font-inter font-normal leading-relaxed text-gray-700">
              At Blush Bakes, our mission is to create beautifully crafted, pink-themed cakes and
              pastries that bring joy to every celebration. We are dedicated to using high-quality
              ingredients, ensuring every bite is as delightful as it looks. With passion and
              creativity, we aim to make every moment sweeter, one blush-colored treat at a time.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative w-full max-w-[601px] h-[390px] rounded-[40px] overflow-hidden mx-auto">
              <Image
                src="/frame2.png"
                alt="Blush Bakes Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="flex-1">
            <div className="relative w-full max-w-[601px] h-[390px] rounded-[40px] overflow-hidden mx-auto">
              <Image
                src="/frame2.png"
                alt="Blush Bakes Promise"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-inter font-bold text-[40px] text-pink-600 mb-4">Our Promise</h2>
            <p className="text-lg font-inter font-normal leading-relaxed text-gray-700">
              At Blush Bakes, we promise to deliver cakes and pastries that are not only visually
              stunning but also irresistibly delicious. We are committed to using premium
              ingredients, crafting each treat with love and care, and ensuring every order meets
              the highest standards of quality and taste.
            </p>
          </div>
        </section>
      </div>

      {/* Contact Section with Full-Width Image */}
      <section className="relative w-screen h-[600px]">
        <Image
          src="/frame2.png"
          alt="Want To Know More About Us?"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4">
          <h2 className="font-inter font-bold text-[36px] text-pink-600 mb-4">
            Want To Know More About Us?
          </h2>
          <Link href="/contact">
            <button className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
