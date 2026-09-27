"use client";
import { useContext } from "react";
import { GlobalContext } from "@/context/Context";
import { Product } from "@/context/Context";

export default function AddToCartButton({ product }: { product: Product }) {
  const context = useContext(GlobalContext);
  if (!context) return null; 
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        context.addToCart(product);
      }}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition shadow-md mt-auto"
    >
      Add to Cart
    </button>
  );
}