"use client";
import { GoSearch, GoHeart } from "react-icons/go";
import { PiShoppingBag, PiListBold, PiCaretDownBold } from "react-icons/pi";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Link from "next/link";
import Image from "next/image";
import Shop from "./Shop";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showShop, setShowShop] = useState(false);

  return (
    <section className="header flex items-center justify-between py-5 px-3 lg:px-6">
      <Link href="/">
        <Image src="/LogoTextBlack.png" alt="logo" width={120} height={110} />
      </Link>

      <ul className="menu max-md:hidden flex items-center justify-between gap-6 lg:gap-10 lg:text-xl xl:text-2xl">
        <li>
          <Link href="/">home</Link>
        </li>
        <li
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => {
            setShowShop(true);
            console.log("click shod");
          }}
        >
          <Link href="/">shop</Link>
          <PiCaretDownBold className="mt-1" />
        </li>
        {showShop ? <Shop setShow={setShowShop} /> : null}

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

      <section className="left flex items-center gap-2 lg:gap-5">
        <div className="icons max-sm:hidden text-2xl xl:text-3xl flex items-center gap-2 lg:gap-3">
          <button>
            <PiShoppingBag />
          </button>
          <button>
            <GoSearch />
          </button>
          <button>
            <GoHeart />
          </button>
        </div>

        <button
          className="text-4xl md:hidden"
          onClick={() => setShowMenu(true)}
        >
          <PiListBold />
        </button>
        {showMenu ? <HamburgerMenu setShow={setShowMenu} /> : null}

        <button className="text-white bg-black pb-2 pt-1 px-5 lg:pb-4 lg:pt-2 lg:px-7 2xl:pb-5 2xl:pt-3 2xl:px-9 rounded-lg capitalize  lg:text-xl 2xl:text-2xl">
          login
        </button>
      </section>
    </section>
  );
};

export default Header;
