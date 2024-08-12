import { ReactNode } from "react";
import { fonts } from "./../fonts/index";
import { typography } from "@/typography";

const HrLine = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative py-4 ">
      <div className="absolute inset-0 flex items-center px-10">
        <div className="w-full border-b border-gray"></div>
      </div>
      <div className="relative flex justify-end">
        <span
          className={` ${typography.section}  bg-backgroundBlue mr-20 px-4 `}
        >
          {children}
        </span>
      </div>
    </div>
  );
};

export default HrLine;
