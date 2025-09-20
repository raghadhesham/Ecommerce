// app/checkout/page.tsx
"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // simple controlled form state
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // quick validation
    if (!form.name || !form.address || !form.email) {
      toast.error("Please fill all required fields");
      return;
    }

    // here you would send order to API
    // await fetch('/api/order', {method:'POST',body:JSON.stringify({...})})

    toast.success("Order placed successfully! 🎉");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <h2 className="font-semibold mb-2">Order Summary</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-1">
          <span>
            {item.title} x {item.quantity}
          </span>
          <span>{(item.price * item.quantity).toFixed(2)} EGP</span>
        </div>
      ))}

      <div className="flex justify-between mt-4 border-t pt-2 text-lg font-bold">
        <span>Total:</span>
        <span>{total.toFixed(2)} EGP</span>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {/* add payment info fields here */}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
