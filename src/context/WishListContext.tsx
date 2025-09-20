// context/WishListContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type WishlistContextType = {
  wishlist: any[];
  addToWishlist: (item: any) => void;
  removeFromWishlist: (id: string | number) => void;
  isInWishlist: (id: string | number) => boolean;
  clearWishlist: () => void; // ⬅️ expose
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  // optional: load persisted wishlist
  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  // optional: persist wishlist
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item: any) => {
    setWishlist(prev => {
      if (prev.find(w => w.id === item.id)) return prev; // already there
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: string | number) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const isInWishlist = (id: string | number) => {
    return wishlist.some(item => item.id === id);
  };

  // ⬇️ new clearWishlist
  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem("wishlist");
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider");
  return ctx;
};
