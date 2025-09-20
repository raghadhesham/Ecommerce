"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import getAllCategories from "@/api/AllCategories/AllCategories";
type Props = {
  categories?: any[]; // optional so we can default
};
export default function CategorySwiper({ categories = [] }: Props) {
    console.log(categories);
    
  return (
    <>
          <div className="w-[80%] mx-auto">
              <Swiper
        spaceBetween={0}
        slidesPerView={7}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
      >
        {categories.map((category:any) => (
          <SwiperSlide key = {category._id}>
            <img
              alt="slider"
              src={category.image}
              className="w-full h-[150px]"
                />
                <p>{category.name }</p>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
