"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SpecialOrders = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    phone: "",
    name: "",
    address: "",
    city: "",
    zip: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //  Construct item from form data
    const specialItem = {
      id: Date.now(),
      title: `Special Order by ${form.name}`,
      description: form.details || "Custom special order",
      price: 999, // or any fixed or calculated price
      oldPrice: 0,
      quantity: 1,
      img: "/temporary/special.jpg", // placeholder image
      checked: false,
    };

    // Save to localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...existingCart, specialItem]));

    // Redirect to cart
    router.push("/cart"); // make sure your cart route is correct
  };

  return (
    <div className="special-order-form p-8 min-h-screen bg-[rgba(255,204,211,0.5)]">
      <section className="text-center mb-16">
        <h1 className="font-inter font-bold text-[36px] text-pink-600 mb-4">Special Order Form</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-justify">
          Please fill out the special order form, and a member of our team will reach out to you within 24 hours to confirm your request.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="w-full p-8 rounded-2xl mb-8 flex flex-col items-center">
        {/* Input Fields */}
        {["email", "phone", "name", "address", "city", "zip"].map((field, idx) => (
          <div className="mb-4" key={idx}>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              value={(form as any)[field]}
              onChange={handleChange}
              className="flex items-center w-[1033px] h-[75px] px-[28px] py-[26px] rounded-lg border-2 border-gray-300 outline-none font-inter"
            />
          </div>
        ))}

        {/* Order Detail */}
        <div className="mb-6">
          <textarea
            name="details"
            placeholder="Order Detail"
            value={form.details}
            onChange={handleChange}
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
