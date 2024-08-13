import { fonts } from "@/fonts";
import HrLine from "../HrLine";
import Image from "next/image";
import { projectData } from "@/data/projectData";
import PortfolioSlider from "../sliders/PortfolioSlider";

const PortfolioSection = () => {
  return (
    <section className=" text-center">
      <HrLine>Portfolio</HrLine>
      <div className="container">
        {projectData?.map((project) => (
          <div key={project?.name}>
            <div>
              <h4
                className={`${fonts.adventPro.className} text-[28px] mt-14 py-4 font-normal`}
              >
                {project.name}
              </h4>
              <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
              <p className="py-4 text-[20px] font-normal">
                <span>{project.user}</span>
                {project.tech.map((data) => (
                  <span className="ml-10 md:ml-20 " key={data}>
                    {data}
                  </span>
                ))}
              </p>
            </div>
            <PortfolioSlider project={project} />
          </div>
        ))}
        <button
          className={`${fonts.adventPro.className}  font-semibold bg-buttonBlue text-darkBlue py-[10px]  px-[100px] rounded-[40px] text-[24px] md:text-[28px] lg:text-[32px] mb-10`}
        >
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
