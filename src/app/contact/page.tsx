import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="p-8 min-h-screen bg-[rgba(255,204,211,0.5)] flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-16 w-full max-w-7xl items-start">
        
        {/* Left Side - Text Section */}
        <section className="flex-1">
          <h1 className="font-inter font-bold text-[32px] text-pink-600 mb-6">
            Let’s Get In Touch
          </h1>
          <p className="text-base font-inter text-gray-700 mb-6 text-justify">
            We’d love to be part of your sweetest moments! Whether you have a special order in mind, a question about our menu, or just want to say hello, we’re here to help.
            At Blush Bakes, we believe that every celebration deserves a touch of pink perfection, and we’re excited to bring your dream cake to life.
          </p>
          <p className="text-base font-inter text-gray-700 text-justify">
            Reach out to us for custom cakes, event collaborations, or any inquiries. You can visit our shop, send us a message on social media, or contact us through our email and phone.
            Let’s create something sweet together!
          </p>
        </section>

        {/* Right Side - Form Section */}
        <form className="flex-1 flex flex-col gap-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full h-[55px] px-4 rounded-lg border border-gray-400 outline-none font-inter"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full h-[55px] px-4 rounded-lg border border-gray-400 outline-none font-inter"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            className="w-full h-[180px] p-4 rounded-lg border border-gray-400 outline-none font-inter resize-none"
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="px-8 py-4 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition duration-300 font-inter"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
