import { ReactNode } from "react";
import { fonts } from "./../fonts/index";

const HrLine = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="relative  ">
        <div className="absolute inset-0 flex items-center px-10">
          <div className="w-full border-b border-gray"></div>
        </div>
        <div className="relative flex justify-end">
          <span
            className={` ${fonts.alegreya.className} text-[14px] md:text-[24px] italic bg-backgroundBlue mr-20 px-4 `}
          >
            {children}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HrLine;
