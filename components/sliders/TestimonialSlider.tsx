"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialData } from "@/data/testimonialData"; // Assuming this is where your data is

import { fonts } from "@/fonts";
import HrLine from "../HrLine";
import { useEffect, useRef } from "react";
import Image from "next/image";

const TestimonialSlider = () => {
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
    <div className="mt-20">
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Store swiper instance
        }}
        className="testimonialSwiper"
      >
        <div className="grid grid-cols-3 gap-8 ">
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="col-span-1  p-14 h-full border-[.5px] border-white rounded-[16px] "
                style={testimonial.style}
              >
                <p>{testimonial.message}</p>
                <h5
                  className={`${fonts.adventPro.className} text-[20px] font-medium py-4`}
                >
                  {testimonial.clientName}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div className="flex justify-center mt-20">
        <button ref={prevRef} className="mr-20">
          <Image src="/icons/prev.svg" alt="" width={32} height={18} />
        </button>
        <button ref={nextRef}>
          <Image src="/icons/next.svg" alt="" width={32} height={18} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
