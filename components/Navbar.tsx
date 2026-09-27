"use client";
import { useContext } from "react";
import { GlobalContext } from "@/context/Context";
import Link from "next/link";

export default function Navbar() {
  const context = useContext(GlobalContext);
  const cartCount = context?.cart.reduce((total, item) => total + (item.quantity || 1), 0) || 0;
  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold font-serif text-blue-600">
          SwiftBuy
        </Link>
        <Link href="/cart" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full font-semibold transition">
          🛒 Cart 
          <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}