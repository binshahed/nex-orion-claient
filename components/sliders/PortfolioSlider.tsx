"use client";

import React, { useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

const PortfolioSlider = ({
  project
}: {
  project: { image: { src: string }[] };
}) => {
  const swiperRef: any = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init(); // Initialize navigation
      swiperRef.current.navigation.update(); // Update navigation
    }
  }, [swiperRef]);

  return (
    <div className="border rounded-[20px] my-10 ">
      <div className="flex p-[28px]">
        <Swiper
          ref={swiperRef}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store swiper instance
          }}
        >
          {project.image.map((img) => (
            <SwiperSlide key={img.src}>
              <Image
                className=" p-[30px] lg:p-[53px] md:p-[53px]"
                src={img.src}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="inline md:block lg:block">
          <button className="w-3 h-3" ref={nextRef}>
            <Image src="/icons/nextIcon.svg" width={14} height={7} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
