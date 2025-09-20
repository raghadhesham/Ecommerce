"use client";
import { WishlistProvider } from "@/context/WishListContext"; // now it exists
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/app/_components/navbar";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Navbar />
          {children}
          <Toaster />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}
