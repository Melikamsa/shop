"use client";
import React from "react";
import Shop from "../Shop";
import { GrClose } from "react-icons/gr";
import { PiCaretDownBold } from "react-icons/pi";
import { useState } from "react";
import Accordion from "@/components/Accordion";
import Image from "next/image";
import Link from "next/link";

const HamburgerMenu = ({ setShow }) => {
  const [showShop, setShowShop] = useState(false);

  return (
    <section className="md:hidden z-10">
      <div className="p-[30px] w-[80%] h-screen fixed top-0 left-0 bg-[#737373]">
        <button
          className="text-2xl mb-3 text-black"
          onClick={() => setShow(false)}
        >
          <GrClose />
        </button>

        <div className="my-4">
          <Link href="/">
            <Image
              src="/LogoTextBlack.png"
              alt="logo"
              width={120}
              height={110}
            />
          </Link>
        </div>

        <ul className=" flex flex-col w-[120px] justify-between text gap-7 text-lg">
          <li>
            <Link href="/">home</Link>
          </li>

          <section>
            <Accordion
              isOpenStatus={setShowShop}
              AccordionHeader={
                <li
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => {
                    setShowShop(true);
                    console.log("click shod");
                  }}
                >
                  <Link href="/">shop</Link>
                  <span className={`mt-1  ${showShop ? "-rotate-90" : ""}`}>
                    <PiCaretDownBold />
                  </span>
                </li>
              }
            >
              {showShop ? (
                <div className="absolute left-28 bottom-5">
                  <Shop setShow={setShowShop} />
                </div>
              ) : null}
            </Accordion>
          </section>

          <li>
            <Link href="/">our story</Link>
          </li>
          <li>
            <Link href="/">blog</Link>
          </li>
          <li>
            <Link href="/">contact us</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HamburgerMenu;
