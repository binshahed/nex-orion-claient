"use client";

import { fonts } from "@/fonts";
import Image from "next/image";
import React from "react";

import SlotCounter from "react-slot-counter";

const Counter = () => {
  return (
    <>
      <div className="mb-10">
        <p>CLICK</p>
        <h1 className={`${fonts.adventPro.className} text-white heading-1`}>
          <SlotCounter
            value="1000M+"
            animateOnVisible={{
              triggerOnce: false,
              rootMargin: "0px 0px -100px 0px"
            }}
          />
        </h1>
        <hr />
      </div>
      <div className="mb-10">
        <p>CONVERSIONS</p>
        <h1 className={`${fonts.adventPro.className} text-white heading-1`}>
          <SlotCounter
            value="500K+"
            animateOnVisible={{
              triggerOnce: false,
              rootMargin: "0px 0px -100px 0px"
            }}
          />
        </h1>
        <hr />
      </div>
      <div className="mb-10">
        <p>OUR POSSIBILITIES</p>
        <Image
          className="py-10"
          src="/icons/infinite.svg"
          alt="icon"
          width={74}
          height={34}
        />
        <hr />
      </div>
    </>
  );
};

export default Counter;
