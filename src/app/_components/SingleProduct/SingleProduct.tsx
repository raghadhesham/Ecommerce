// components/SingleProduct.tsx
"use client";
import React from "react";
import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishListContext";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function SingleProduct({ product }: { product: any }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { token } = useAuth();
  const router = useRouter();
  const inWishlist = isInWishlist(product.id);

  function handleAdd() {
    if (!token) {
      toast.error("Please log in to add items to your cart");
      router.push("/login");
      return;
    }

    addToCart({
      id: product.id,
      title: product.title,
      image: product.imageCover,
      price: product.price,
      quantity: 1,
    });
    toast.success(`${product.title} added to your cart`);
  }

  function handleWishlist() {
    if (!token) {
      toast.error("Please log in to add to wishlist");
      router.push("/login");
      return;
    }
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success("Removed from wishlist");
    } else {
      addToWishlist({
        id: product.id,
        title: product.title,
        image: product.imageCover,
        price: product.price,
      });
      toast.success("Added to wishlist");
    }
  }

  const liked = isInWishlist(product.id);

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
      <div className="product p-4">
        <Card className="gap-2 relative">
          {/* heart button */}
          <button
            type="button"
            onClick={handleWishlist}
            className="absolute top-3 right-3"
            aria-label="Add to wishlist"
          >
            <Heart
              size={24}
              className={liked ? "text-red-500 fill-red-500" : "text-gray-400"}
            />
          </button>

          <Link href={`/products/${product.id}`}>
            <CardHeader>
              <CardTitle className="line-clamp-2">{product.title}</CardTitle>
              <CardDescription className="text-emerald-600">
                {product.category?.name}
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="py-4"
                />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between w-full">
                <span>
                  <p>{product.price} EGP</p>
                </span>
                <span>
                  {product.ratingsAverage}
                  <i className="fas fa-star text-yellow-500"></i>
                </span>
              </div>
            </CardContent>
          </Link>
          <CardFooter>
            <Button
              className="bg-green-600 w-[80%] mx-auto cursor-pointer"
              onClick={handleAdd}
            >
              ADD TO CART
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
