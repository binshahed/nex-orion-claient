"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonialData } from "@/data/testimonialData"; // Assuming this is where your data is

import { fonts } from "@/fonts";
import HrLine from "../HrLine";

const TestimonialSlider = () => {
  return (
    <div className="mt-20">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        modules={[Navigation]}
        className="testimonialSwiper"
      >
        <div className="grid grid-cols-3 gap-8 ">
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className=" col-span-1 p-14 border-[.5px] border-white rounded-[16px]"
                style={{
                  background:
                    "linear-gradient(200deg, rgba(0,18,23,1) 26%, rgba(12,148,193,1) 100%)"
                }}
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
    </div>
  );
};

export default TestimonialSlider;
