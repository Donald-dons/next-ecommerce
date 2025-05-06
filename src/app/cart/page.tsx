'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cartItems } from '@/data';
import Link from 'next/link';

const CartPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'gcash'>('cod');

  return (
    <div className="min-h-screen bg-pink-100 p-4 md:p-6 flex flex-col md:flex-row justify-center items-start gap-[15px]">
      {/* LEFT: Shopping Cart */}
      <div className="bg-white p-6 rounded-2xl w-full max-w-2xl shadow-md mt-8">
        <h2 className="text-[25px] font-bold text-rose-600 mb-6">Shopping Cart</h2>

        {/* Cart Items */}
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="text-gray-800 text-[15px] font-semibold">{item.title}</div>
            </div>

            <div className="flex items-center gap-4 ">
              <div className="flex items-center border rounded-lg px-2">
                <button className="px-2 text-lg font-bold">−</button>
                <span className="px-2">{item.quantity}</span>
                <button className="px-2 text-lg font-bold">+</button>
              </div>
              <div className="text-rose-600 font-semibold text-[15px]">₱{item.price}.00</div>
              <button className="text-gray-400 hover:text-red-500 text-xl font-bold">×</button>
            </div>
          </div>
        ))}
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
          <Link
            href="/cart/checkout"
            className="block text-center w-full bg-rose-400 text-white font-semibold py-3 text-[18px] rounded-xl hover:bg-rose-500"
          >
            Proceed to Checkout
          </Link>
          <button className="w-full border border-gray-300 py-3 text-[18px] rounded-xl hover:bg-gray-100">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
