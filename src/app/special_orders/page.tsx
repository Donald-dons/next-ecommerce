import React from "react";

const SpecialOrders = () => {
  return (
    <div className="special-order-form p-8 min-h-screen bg-[rgba(255,204,211,0.5)]">
      
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="font-inter font-bold text-[36px] text-pink-600 mb-4">
          Special Order Form
        </h1>
        <p className="text-lg font-inter font-normal text-gray-700 max-w-2xl mx-auto text-justify">
          Please fill out the special order form, and a member of our team will reach out to you within 24 hours to confirm your request.
        </p>
      </section>

      {/* Form Section */}
      <form className="w-full p-8 rounded-2xl mb-8 flex flex-col items-center">
        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="flex items-center w-[1033px] h-[75px] px-[28px] py-[26px] rounded-lg border-2 border-gray-300 outline-none font-inter"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone Number"
            className="flex items-center w-[1033px] h-[75px] px-[28px] py-[26px] rounded-lg border-2 border-gray-300 outline-none font-inter"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="flex items-center w-[1033px] h-[75px] px-[28px] py-[26px] rounded-lg border-2 border-gray-300 outline-none font-inter"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Address"
            className="flex items-center w-[1033px] h-[75px] px-[28px] py-[26px] rounded-lg border-2 border-gray-300 outline-none font-inter"
          />
        </div>

        {/* City and Zip Code */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="City"
            className="flex items-center w-[504px] h-[75px] px-[28px] py-[26px] rounded-lg border-2 border-gray-300 outline-none font-inter"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="flex items-center w-[504px] h-[75px] px-[28px] py-[26px] rounded-lg border-2 border-gray-300 outline-none font-inter"
          />
        </div>

        {/* Order Detail */}
        <div className="mb-6">
          <textarea
            placeholder="Order Detail"
            className="flex items-center w-[1033px] h-[426px] px-[28px] rounded-lg border-2 border-gray-300 outline-none font-inter resize-none text-left"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-4 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition duration-300 font-inter"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SpecialOrders;
