import { fonts } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" ">
      <div className="container grid grid-cols-4 gap-8 py-20">
        <div>
          <Image
            src="/nexorion-logo-light.png"
            alt=""
            width={200}
            height={100}
          />
        </div>
        <div className="space-y-4">
          <p>Service</p>
          <p>About Us</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>
        <div className="space-y-4">
          <p>Terms and Conditions </p>
          <p>Privacy Policy </p>
          <p>Cookie Policy </p>
        </div>
        <div className="space-y-4">
          <p>Email</p>
          <p className={`${fonts.adventPro.className} text-[24px] font-medium`}>
            nexorionbd@gmail.com{" "}
          </p>
          <div className="flex space-x-4">
            {/* {" "}
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/nexorion/"}
            >
              <Image
                src="/icons/social/twitter.svg"
                alt="twitter"
                width={32}
                height={32}
              />
            </Link>{" "} */}
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/nexorion/"}
            >
              <Image
                src="/icons/social/Group.svg"
                alt="twitter"
                width={36}
                height={36}
              />
            </Link>{" "}
            <Link target="_blank" href={"https://www.facebook.com/nexorionIT"}>
              <Image
                src="/icons/social/fb.svg"
                alt="twitter"
                width={32}
                height={32}
              />
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-darkBlue"></div>
        <div className="flex-grow border-t border-darkBlue"></div>
      </div>
      <p className="text-center text-[18px] text-blue1 mb-10">
        Copyright © 2024 Nex Orion all rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
