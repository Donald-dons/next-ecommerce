'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'gcash'>('cod');

  return (
    <div className="min-h-screen bg-pink-100 p-4 md:p-6 flex flex-col md:flex-row justify-center items-start gap-[15px]">
      {/* LEFT: Shipping Form */}
      <div className="bg-white p-6 rounded-2xl w-full max-w-2xl shadow-md flex flex-col justify-between mt-8">
        <div>
          <h2 className="text-[25px] font-bold text-rose-600 mb-2">Checkout</h2>
          <h3 className="text-[25px] font-semibold text-rose-500 mb-4">Shipping Information</h3>

          <form className="space-y-6 text-base">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label htmlFor="firstName" className="block text-sm text-gray-700 mb-1">First Name</label>
                <input id="firstName" type="text" title="First Name" className="w-full border border-pink-300 p-3 rounded-xl" />
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block text-sm text-gray-700 mb-1">Last Name</label>
                <input id="lastName" type="text" title="Last Name" className="w-full border border-pink-300 p-3 rounded-xl" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email Address</label>
              <input id="email" type="email" title="Email Address" className="w-full border border-pink-300 p-3 rounded-xl" />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm text-gray-700 mb-1">Delivery Address</label>
              <input id="address" type="text" title="Delivery Address" className="w-full border border-pink-300 p-3 rounded-xl" />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label htmlFor="city" className="block text-sm text-gray-700 mb-1">City</label>
                <input id="city" type="text" title="City" className="w-full border border-pink-300 p-3 rounded-xl" />
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="block text-sm text-gray-700 mb-1">Phone Number</label>
                <input id="phone" type="text" title="Phone Number" className="w-full border border-pink-300 p-3 rounded-xl" />
              </div>
            </div>

            <div>
              <label htmlFor="instruction" className="block text-sm text-gray-700 mb-1">Special Instruction (Optional)</label>
              <input id="instruction" type="text" title="Special Instruction" className="w-full border border-pink-300 p-3 rounded-xl" />
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT: Order Summary */}
      <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-md flex flex-col justify-between mt-8">
        <div>
          <h3 className="text-[25px] font-semibold text-rose-500 mb-[10px]">Order Summary</h3>

          <div className="mt-11 text-[20px] text-gray-800 space-y-6 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₱5,300.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₱100.00</span>
            </div>
            <div className="flex justify-between font-bold text-rose-600 border-t pt-2">
              <span>Total</span>
              <span>₱5,400.00</span>
            </div>
          </div>

          <div className="space-y-6 mb-6">
            <label className="flex items-center gap-4 border border-gray-300 p-4 rounded-xl cursor-pointer text-[20px]">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
              />
              <span>🚚 Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-4 border border-gray-300 p-4 rounded-xl cursor-pointer text-[20px]">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'gcash'}
                onChange={() => setPaymentMethod('gcash')}
              />
              <span>💳 Online Payment (Gcash)</span>
            </label>
          </div>
        </div>

        <div className="space-y-4 mt-4">
        <button className="w-full bg-rose-400 text-white font-semibold py-3 text-[18px] rounded-xl hover:bg-rose-500">
            Proceed to Checkout
        </button>
          <button className="w-full border border-gray-300 py-3 text-[18px] rounded-xl hover:bg-gray-100">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
