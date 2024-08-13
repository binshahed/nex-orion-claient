import Image from "next/image";
import HrLine from "../HrLine";
import { fonts } from "@/fonts";

const ContactSection = () => {
  return (
    <section>
      <HrLine>Contact</HrLine>
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-full bg-backgroundBlue opacity-5 object-cover"
          src="/contact-bg.jpg"
          alt=""
          width={1000}
          height={100}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="container relative z-10 flex flex-col justify-center items-center">
          <div className="w-full">
            <h2
              className={`${fonts.adventPro.className} text-center mt-14 heading-3 py-4`}
            >
              Get in Touch
            </h2>
            <p className="text-center">
              Contact us today and {"let's"} start a conversation about how we{" "}
              <br />
              can bring your ideas to life.
            </p>

            <div className="w-2/3 mx-auto p-6">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-5 text-darkBlue bg-white border border-gray rounded-[30px] focus:outline-none focus:ring-0"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full  p-5 text-darkBlue bg-white border border-gray rounded-[30px] focus:outline-none focus:ring-0"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  className="w-full p-3 text-darkBlue bg-white border border-gray rounded-[20px] focus:outline-none focus:ring-0"
                  rows={4}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className={`${fonts.adventPro.className} w-full font-semibold bg-buttonBlue text-darkBlue py-[10px] px-50 md:px-[100px] rounded-[40px] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
