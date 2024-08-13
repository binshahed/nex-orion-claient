import { fonts } from "@/fonts";
import HrLine from "../HrLine";

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

        <div className="grid grid-cols-3 gap-8 my-28">
          <div
            className=" p-14 border-[.5px] border-white rounded-[16px]"
            style={{
              // background: 'rgb(0,18,23)',
              background:
                "linear-gradient(200deg, rgba(0,18,23,1) 26%, rgba(12,148,193,1) 100%)"
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
              dolore possimus odio cumque iste voluptatibus maxime pariatur
              itaque ducimus odit!
            </p>
            <h5
              className={`${fonts.adventPro.className} text-[20px] font-medium py-4`}
            >
              Alex Thompson
            </h5>
          </div>
          <div
            className=" p-14 border-[.5px] border-white rounded-[16px]"
            style={{
              // background: 'rgb(0,18,23)',
              background:
                "linear-gradient(320deg, rgba(0,18,23,1) 26%, rgba(12,148,193,1) 100%)"
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
              dolore possimus odio cumque iste voluptatibus maxime pariatur
              itaque ducimus odit!
            </p>
            <h5
              className={`${fonts.adventPro.className} text-[20px] font-medium py-4`}
            >
              Alex Thompson
            </h5>
          </div>
          <div
            className=" p-14 border-[.5px] border-white rounded-[16px]"
            style={{
              // background: 'rgb(0,18,23)',
              background:
                "linear-gradient(200deg, rgba(0,18,23,1) 26%, rgba(12,148,193,1) 100%)"
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
              dolore possimus odio cumque iste voluptatibus maxime pariatur
              itaque ducimus odit!
            </p>
            <h5
              className={`${fonts.adventPro.className} text-[20px] font-medium py-4`}
            >
              Alex Thompson
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
