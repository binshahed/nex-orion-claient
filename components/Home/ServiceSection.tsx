import { fonts } from "@/fonts";
import HrLine from "../HrLine";
import Image from "next/image";
import { serviceData } from "@/data/serviceData";

const ServiceSection = () => {
  return (
    <section className="lg:h-screen md:h-[100vh]">
      <HrLine>Service</HrLine>
      <div className="container">
        <h2
          className={`${fonts.adventPro.className} text-center mt-14 heading-3 py-4`}
        >
          Your software partner
        </h2>
        <p className="text-center">
          Our custom solutions are designed <br /> to fit your exact needs.
        </p>
        <div className="grid grid-cols-12 gap-4 my-[50px]">
          {serviceData?.map((data, index) => (
            <div
              className={`col-span-12  ${
                index > 3 ? "md:col-span-4" : "md:col-span-3"
              } border rounded-3xl p-[30px] font-normal`}
              key={data?.title}
            >
              <Image width={52} height={52} src={data?.icon} alt="" />
              <h4
                className={`${fonts?.montserrat.className} text-[20px] mt-5 mb-2`}
              >
                {data?.title}
              </h4>
              <p
                className={`${fonts?.montserrat.className} text-[18px] font-light`}
              >
                {data?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
