"use client";

import { fonts } from "@/fonts";
import BannerVideo from "../BannerVideo";

const BannerSection = () => {
  return (
    <section className="relative h-[89vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <BannerVideo />

      {/* Content */}
      <div className="container relative z-10 h-full flex items-center page-transition ">
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <div>
            <h1
              className={`${fonts.adventPro.className} text-white heading-1 `}
            >
              Innovation in every <br /> line of custom code
            </h1>
            <p className="text-[16px] sm:text-[18px] font-light mt-4 text-white">
              Experience the difference with <br /> our custom software
              solutions.
            </p>
          </div>
          <div className="flex flex-col justify-end md:items-center">
            <button
              className={`${fonts.adventPro.className} font-semibold bg-buttonBlue text-darkBlue py-[10px] px-50 md:px-[100px] rounded-[40px] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] hover-effect `}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
