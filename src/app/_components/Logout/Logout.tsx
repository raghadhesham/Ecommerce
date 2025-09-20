// src/app/_components/Logout/Logout.tsx
"use client";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishListContext";

export default function LogoutButton() {
  const { logout } = useAuth();
  const { clearCart } = useCart();        // add a clearCart function in CartContext
  const { clearWishlist } = useWishlist(); // add a clearWishlist function in WishListContext

  const handleLogout = () => {
    logout();
    clearCart();
    clearWishlist();
  };

  return (
    <button
      onClick={handleLogout}
      className="text-red-600 hover:underline"
    >
      Logout
    </button>
  );
}
