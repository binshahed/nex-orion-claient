"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { fonts } from "./../fonts/index";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 1, name: "Service", path: "/services" },
    { id: 2, name: "Portfolio", path: "/portfolio" }
  ];
  const navItems1 = [
    { id: 3, name: "About us", path: "/about-us" },
    { id: 4, name: "Contact us", path: "/contact-us" }
  ];
  return (
    <div className="py-5">
      <div className="container mx-auto">
        <nav className="flex flex-col py-4 md:flex-row md:items-center">
          <div className="flex items-center justify-between md:w-2/5">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-100 bg-gray-800 hover:bg-gray-800 focus:ring-gray-100 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <Link href="/">
              <Image
                width={150}
                height={20}
                alt="logo"
                src="/nexorion-logo-light.png"
              />
            </Link>

            {/* for mobile device  */}
          </div>

          {/* <div className='flex justify-between'> */}
          <ul
            className={`${
              fonts?.adventPro.className
            } text-[24px] mb-4 flex-1 md:mb-0 md:block md:text-start   ${
              isMenuOpen ? "block " : "hidden"
            }`}
          >
            {navItems?.map((item) => (
              <li
                className="mx-8 my-4 md:my-0 md:inline-block relative before:absolute before:content-[''] before:w-1 before:h-1 before:bg-white before:rounded-full before:left-[-15px] before:top-1/2 before:transform before:-translate-y-1/2"
                key={item.id}
              >
                <Link href={item?.path}>{item?.name}</Link>
              </li>
            ))}
          </ul>
          <ul
            className={`${
              fonts.adventPro.className
            } text-[24px] mb-4 flex-1 md:mb-0 md:block md:text-end  ${
              isMenuOpen ? "block " : "hidden"
            }`}
          >
            {navItems1?.map((item) => (
              <li
                className="mx-8 my-4 md:my-0 md:inline-block relative before:absolute before:content-[''] before:w-1 before:h-1 before:bg-white before:rounded-full before:left-[-15px] before:top-1/2 before:transform before:-translate-y-1/2"
                key={item.id}
              >
                <Link href={item?.path}>{item?.name}</Link>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
