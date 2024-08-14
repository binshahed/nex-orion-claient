import { fonts } from "@/fonts";
import HrLine from "../HrLine";
import TestimonialSlider from "../sliders/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="lg:h-screen md:h-[100vh]">
      <HrLine>Testimonials</HrLine>
      <div className="container">
        <h2
          className={`${fonts.adventPro.className} text-center mt-14 heading-3 py-4`}
        >
          Your software partner
        </h2>
        <p className="text-center">
          Our {"clients'"} testimonials highlight our dedication to delivering{" "}
          <br />
          exceptional results and building lasting relationships.
        </p>

        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialSection;
