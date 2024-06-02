"use client";
import { GoSearch, GoHeart } from "react-icons/go";
import { PiShoppingBag, PiListBold, PiCaretDownBold } from "react-icons/pi";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Link from "next/link";
import Image from "next/image";
import Shop from "./Shop";
import { useState } from "react";
import Accordion from "../Accordion";
import "@/styles/components/Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showShop, setShowShop] = useState(false);

  return (
    <section className="header py-5 px-3 lg:px-6">
      <Link href="/">
        <Image src="/LogoTextBlack.png" alt="logo" width={120} height={110} />
      </Link>

      <ul className="menu">
        <li>
          <Link href="/">home</Link>
        </li>

        <section>
          <Accordion
            isOpenStatus={setShowShop}
            AccordionHeader={
              <li
                className="flex items-center gap-1 cursor-pointer "
                onClick={() => {
                  setShowShop(true);
                  console.log("click shod");
                }}
              >
                <Link href="/">shop</Link>
                <span
                  className={`mt-1 lg:mt-2 xl:mt-3 ${
                    showShop ? "rotate-180" : ""
                  }`}
                >
                  <PiCaretDownBold />
                </span>
              </li>
            }
          >
            {showShop ? (
              <div className="absolute top-12">
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

      <section className="left ">
        <div className="icons ">
          <button>
            <Link href="/checkOut">
              <PiShoppingBag />
            </Link>
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

        <Link href="/login">
          <button className="text-white bg-black pb-2 pt-1 px-5 lg:pb-4 lg:pt-2 lg:px-7 2xl:pb-5 2xl:pt-3 2xl:px-9 rounded-lg capitalize  lg:text-xl 2xl:text-2xl">
            login
          </button>
        </Link>
      </section>
    </section>
  );
};

export default Header;
