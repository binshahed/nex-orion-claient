import { fonts } from "@/fonts";
import HrLine from "../HrLine";

const ServiceSection = () => {
  return (
    <section>
      <HrLine>Service</HrLine>
      <h2
        className={`${fonts.adventPro.className} text-center mt-14 text-[28px] py-4 font-semibold`}
      >
        Your software partner
      </h2>
      <p className="text-center">
        Our custom solutions are designed <br /> to fit your exact needs.
      </p>
    </section>
  );
};

export default ServiceSection;
