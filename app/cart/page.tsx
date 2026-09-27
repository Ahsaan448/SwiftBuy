"use client";
import { useContext } from "react";
import { GlobalContext } from "@/context/Context";
import Link from "next/link";

export default function CartPage() {
  const context = useContext(GlobalContext);

  if (!context) return null;
  const { cart, removeItem, increaseQuantity, decreaseQuantity } = context;

  const totalPrice = cart.reduce(
    (acc, cur) => acc + cur.price * (cur.quantity || 1),
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <Link href="/products" className="text-blue-600 font-semibold hover:underline">
          ← Continue Shopping
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border">
          <p className="text-gray-500 text-lg mb-4">Your cart is completely empty.</p>
          <Link href="/products" className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-semibold">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((c) => (
            <div key={c.id} className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-2xl border shadow-sm gap-6">
              <img src={c.image} alt={c.title} className="h-24 w-24 object-contain" />
              
              <div className="flex-grow w-full text-center sm:text-left">
                <h2 className="font-bold text-lg line-clamp-1">{c.title}</h2>
                <p className="text-sm text-gray-500 capitalize mb-3">{c.category}</p>
                
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center bg-gray-100 rounded-lg border border-gray-200">
                    <button 
                      onClick={() => decreaseQuantity(c.id)} 
                      className="px-3 py-1 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-l-lg transition font-bold"
                    >
                      −
                    </button>
                    <span className="px-4 font-semibold text-gray-900 border-x border-gray-200">
                      {c.quantity}
                    </span>
                    <button 
                      onClick={() => increaseQuantity(c.id)} 
                      className="px-3 py-1 text-gray-600 hover:bg-gray-200 hover:text-gray-900 rounded-r-lg transition font-bold"
                    >
                      +
                    </button>
                  </div>

                  <span className="text-gray-300 hidden sm:inline">|</span>
                  
                  <span className="font-semibold text-gray-800">
                    Total: ${(c.price * (c.quantity || 1)).toFixed(2)}
                  </span>
                </div>
              </div>
              
              <button 
                onClick={() => removeItem(c.id)}
                className="bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-4 py-2 rounded-lg transition whitespace-nowrap w-full sm:w-auto"
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="mt-8 p-6 bg-gray-900 text-white rounded-2xl flex justify-between items-center shadow-lg">
            <span className="text-xl font-medium">Grand Total</span>
            <span className="text-3xl font-bold">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}