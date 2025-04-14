import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FFFAFA] px-6 md:px-20 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-black w-full">
      {/* Left Side: Visit Us */}
      <div>
        <h3 className="text-2xl font-bold mb-2">Visit Us</h3>
        <div className="flex items-center gap-2 mb-1">
          <MdLocationOn className="text-lg" />
          <p>BB1, Bongabong Oriental Mindoro</p>
        </div>
        <div className="flex items-center gap-2">
          <MdPhone className="text-lg" />
          <p>0992 867 2313</p>
        </div>
      </div>

      {/* Right Side: Socials */}
      <div className="flex items-center gap-4 md:ml-auto">
        <p className="text-base">Follow Us</p>
        <Link href="#" className="text-blue-800 hover:opacity-80 text-xl">
          <FaFacebookF />
        </Link>
        <Link href="#" className="text-sky-600 hover:opacity-80 text-xl">
          <FaLinkedinIn />
        </Link>
        <Link href="#" className="text-pink-500 hover:opacity-80 text-xl">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
