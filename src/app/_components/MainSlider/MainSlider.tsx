"use client"
import React from "react";
import img1 from "../../../../public/images/slider-image-1.jpeg";
import img2 from "../../../../public/images/slider-image-2.jpeg";
import img3 from "../../../../public/images/slider-image-3.jpeg";
import img4 from "../../../../public/images/imgi_5_blog-img-1.jpg";
import img5 from "../../../../public/images/imgi_6_blog-img-2.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
export default function MainSlider() {
  return (
    <div className="w-[80%] mx-auto my-4 flex">
      <div className="w-3/4">
        <Swiper
          spaceBetween={0}
                  slidesPerView={1}
                  modules={[Autoplay]}
                  autoplay = {{delay:3000}}
        >
          <SwiperSlide>
            <Image
              alt="slider"
              src={img1}
              className="w-full object-cover h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="slider"
              src={img4}
              className="w-full object-cover h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="slider"
              src={img5}
              className="w-full object-cover h-[400px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-1/4">
        <Image
          alt="slider"
          src={img3}
          className="w-full object-cover h-[200px]"
        />
        <Image
          alt="slider"
          src={img2}
          className="w-full object-cover h-[200px]"
        />
      </div>
    </div>
  );
}
