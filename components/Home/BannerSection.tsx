import { Advent_Pro } from "next/font/google";

const adventPro = Advent_Pro({ subsets: ["latin"] });

const BannerSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full bg-backgroundBlue opacity-5 object-cover"
      >
        <source src="/video-bg-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="container relative z-10 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <div>
            <h1
              className={`${adventPro.className} text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px]`}
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
              className={`${adventPro.className} font-semibold bg-buttonBlue text-darkBlue py-[10px] px-50 md:px-[100px] rounded-[40px] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]`}
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
