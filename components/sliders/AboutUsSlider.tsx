"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper/modules";
import { techData } from "@/data/techData"; // Ensure this path is correct
import Image from "next/image";

const AboutUsSlider = () => {
  return (
    <div className="mt-16">
      <Swiper
        autoplay={{ delay: 3000 }}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 8
          }
        }}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {techData?.map((brand) => (
          <SwiperSlide key={brand.logo}>
            <Image src={brand.logo} alt="" width={200} height={100} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutUsSlider;
