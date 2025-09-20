// app/wishlist/page.tsx
"use client";
import { useWishlist } from "../../context/WishListContext";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 && <p>Your wishlist is empty.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wishlist.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="font-semibold">{item.title}</h2>
            <p>{item.price} EGP</p>
            <div className="flex gap-2 mt-2">
              <Link
                href={`/products/${item.id}`}
                className="text-blue-600 hover:underline"
              >
                View
              </Link>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
