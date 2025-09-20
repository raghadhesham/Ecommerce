"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext"; // 👈 import your cart context
import toast from "react-hot-toast";

export default function Details({ data }: any) {
  const { addToCart } = useCart(); // 👈 get the addToCart function

  function handleAdd() {
    addToCart({
      id: data.id,
      title: data.title,
      image: data.imageCover,
      price: data.price,
      quantity: 1,
    });
    toast.success(`${data.title} added to cart`);
  }

  return (
    <div className="container w-full md:w-[80%] flex-col md:flex-row xl:w-[60%] mx-auto mt-20 flex justify-center items-start p-6 gap-8 rounded-2xl shadow-md">
      {/* Left side image */}
      <div className="flex justify-center items-start">
        <img
          src={data.imageCover}
          alt={data.title}
          className="w-full max-w-sm"
        />
      </div>

      {/* Right side details */}
      <Card className="p-6 space-y-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{data.title}</CardTitle>
          <CardDescription className="text-emerald-600 text-sm">
            {data.category?.name}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">{data.price} EGP</p>
            <div className="flex items-center gap-1 text-yellow-500">
              <i className="fas fa-star"></i>
              <span className="text-gray-700">{data.ratingsAverage}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {data.description ?? "No description available."}
          </p>
        </CardContent>

        <CardFooter className="flex">
          <Button
            onClick={handleAdd} // 👈 add this
            className="bg-green-600 hover:bg-green-700 w-full"
          >
            + ADD
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
