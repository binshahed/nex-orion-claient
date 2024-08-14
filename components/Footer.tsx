import { fonts } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-backgroundBlue text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
        <div className="">
          <Link href="/">
            <Image
              src="/nexorion-logo-light.png"
              alt="Nex Orion Logo"
              width={200}
              height={100}
            />
          </Link>
        </div>
        <div className="space-y-2 md:space-y-4">
          <p className="font-semibold">Important Links</p>
          <p className="">
            <Link href="/#services">Service</Link>
          </p>
          <p>
            <Link href="/#about-us">About Us</Link>
          </p>
          <p>
            <Link href="/#portfolio">Portfolio</Link>
          </p>
          <p>
            <Link href="/#contact">Contact</Link>
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <p className="font-semibold">Policies</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <p className="font-semibold">Contact</p>
          <p className={`${fonts.adventPro.className} text-[24px] font-medium`}>
            nexorionbd@gmail.com
          </p>
          <div className="flex space-x-4 ">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/nexorion/"}
            >
              <Image
                src="/icons/social/Group.svg"
                alt="LinkedIn"
                width={36}
                height={36}
              />
            </Link>
            <Link target="_blank" href={"https://www.facebook.com/nexorionIT"}>
              <Image
                src="/icons/social/fb.svg"
                alt="Facebook"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-darkBlue"></div>
      </div>
      <p className="text-center text-[18px] text-blue1 mb-10">
        Copyright © 2024 Nex Orion all rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
