"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { techData } from "@/data/techData";
import Image from "next/image";

export default function AboutUsSlider() {
  return (
    <div className="">
      <Swiper
        autoplay={{ delay: 3000 }}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        modules={[FreeMode, Pagination, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }}
        className="mySwiper"
      >
        {techData.map((data) => (
          <SwiperSlide key={data?.logo} className="p-4 text-center">
            <Image src={data?.logo} alt="logo" width={200} height={50} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
