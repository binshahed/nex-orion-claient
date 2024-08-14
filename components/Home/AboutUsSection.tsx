import { fonts } from "@/fonts";
import HrLine from "../HrLine";
import Counter from "../Counter";
import AboutUsSlider from "../sliders/AboutUsSlider";


const AboutUsSection = () => {
  return (
    <section>
      <HrLine>About Us</HrLine>
      <div className="min-h-[85vh] flex items-center justify-center">
        <div>
          <div className="container mx-auto relative flex flex-wrap items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-7 gap-8 md:gap-28 w-full">
              <div className="col-span-7 md:col-span-4 lg:col-span-4">
                <h1
                  className={`${fonts.adventPro.className} text-white heading-1`}
                >
                  We are Farapi, a cutting-edge company that gets results
                </h1>
                <p className="text-[16px] sm:text-[18px] font-light mt-4 text-white">
                  We are a team of young Egyptian entrepreneurs aiming to become
                  the next tech giant in the MENA region and globally.
                  Established in 2023, our goal is to be a hub for {"Egypt's"}{" "}
                  top tech talents.
                </p>
              </div>
              <div className="col-span-7 md:col-span-3 lg:col-span-3">
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <AboutUsSlider />
      </div>
    </section>
  );
};

export default AboutUsSection;
