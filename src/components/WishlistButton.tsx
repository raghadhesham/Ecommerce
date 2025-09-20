// src/components/WishlistButton.tsx
"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function WishlistButton() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!user) {
      router.push("/login");
      return;
    }
    router.push("/wishlist");
  };

  return (
    <button
      onClick={onClick}
      aria-label="Wishlist"
      className="p-2 rounded-full hover:bg-gray-100"
      title={user ? "Open wishlist" : "Login to view wishlist"}
    >
      <i className={`fa-heart ${user ? "text-red-500" : "text-gray-400"}`} />
    </button>
  );
}
