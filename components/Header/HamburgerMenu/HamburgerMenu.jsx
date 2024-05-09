import React from "react";
import { GrClose } from "react-icons/gr";
import { PiCaretDownBold } from "react-icons/pi";

import Image from "next/image";
import Link from "next/link";

const HamburgerMenu = ({ setShow }) => {
  return (
    <section className="md:hidden">
      <div className="p-[30px] w-[80%] h-screen fixed top-0 left-0 bg-gray-400">
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

        <div onClick={() => false}>
          <ul className="text-xl my-5 flex flex-col gap-4">
            <li>
              <Link href="/">home</Link>
            </li>
            <li className="flex items-center  gap-2">
            <Link href="/">shop</Link>
            <PiCaretDownBold className="mt-2" />
          </li>
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
      </div>
    </section>
  );
};

export default HamburgerMenu;
