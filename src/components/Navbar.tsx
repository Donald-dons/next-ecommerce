import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-16 md:h-24 bg-white text-[#2c0713] px-4 md:px-10 flex items-center justify-between border-b border-pink-200 shadow-sm">
      
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
        <Image src="/logo.png" alt="Blush Bakes Logo" width={30} height={30} />
        <span className="font-semibold text-lg md:text-xl text-[#d14b78]">Blush Bakes</span>
      </Link>

      {/* MENU LINKS */}
      <div className="hidden md:flex gap-8 items-center text-sm md:text-base font-medium">
        <Link href="/about" className="hover:text-pink-400">About Us</Link>
        <Link href="/menu" className="hover:text-pink-400">Products</Link>
        <Link href="/special_orders" className="hover:text-pink-400">Special Orders</Link>
        <Link href="/contact" className="hover:text-pink-400">Contact</Link>
        {!user ? (
          <Link href="/login" className="bg-[#f9d7e0] text-[#d14b78] px-4 py-1 rounded-full hover:bg-[#f8c8d3] transition">Login</Link>
        ) : (
          <Link href="/orders" className="text-[#d14b78]">Orders</Link>
        )}
      </div>

      {/* MOBILE MENU ICON or CART PLACEHOLDER */}
      <div className="md:hidden">
        <Image src="/menu-icon.png" alt="Menu" width={24} height={24} />
      </div>
    </div>
  );
};

export default Navbar;
