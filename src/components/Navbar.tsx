import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
        <Link href="/cart" className="hover:text-pink-400">
          <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
