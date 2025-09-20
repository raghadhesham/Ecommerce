// app/cart/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b py-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-cover mr-4"
          />

          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.price} EGP each</p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              className="px-2 py-1 border rounded"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              −
            </button>
            <span>{item.quantity}</span>
            <button
              className="px-2 py-1 border rounded"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>

          <div className="w-24 text-right">
            {(item.price * item.quantity).toFixed(2)} EGP
          </div>

          <button
            className="text-red-600 hover:underline ml-4"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-6 text-right">
          <div className="text-lg font-bold mb-4">
            Total: {total.toFixed(2)} EGP
          </div>
          <Link
            href="/checkout"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
