import Image from "next/image";

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
        <div></div>
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
