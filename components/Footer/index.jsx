"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GrLocation,
  GrPhone,
  GrMailOption,
  GrLinkNext,
  GrInstagram,
  GrDown,
  GrFormUp,
} from "react-icons/gr";
import { FiTwitter, FiFacebook } from "react-icons/fi";

const Footer = () => {
  const [showInformation, setShowInformation] = useState(false);
  const [showService, setShowService] = useState(false);

  // const { showIcon, setShowIcon } = useState(false);

  return (
    <section className="bg-black">
      <section className="lg:flex lg:items-center lg:justify-between  text-white p-5 sm:p-11 xl:text-[18px]">
        <section className=" flex flex-col justify-between lg:w-[25%] h-[225px] max-lg:mb-11">
          <Link className="w-[120px]" href="/">
            <Image src="/LogoText.png" alt="logo" width={110} height={110} />
          </Link>

          <div className="flex items-center gap-2">
            <button className="text-xl mr-1">
              <GrPhone />
            </button>
            <span>(704) 555-0127</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="text-xl mr-1">
              <GrMailOption />
            </button>
            <span>shop@gmail.com</span>
          </div>

          <div className="flex items-start gap-2">
            <button className="text-xl mr-1">
              <GrLocation />
            </button>
            <span>3891 ranchview dr. richardson, california 62639</span>
          </div>
        </section>

        <section className="lg:h-[225px] max-lg:mb-11">
          <div className="flex items-center justify-between mb-4 ">
            <p className="font-bold text-lg">information</p>
            <span
              className="text-xl lg:hidden cursor-pointer"
              onClick={() => {
                setShowInformation(true);
                // setShowIcon(true);
                // console.log(setShowIcon);
                console.log("click");
              }}
            >
              <GrDown />
            </span>
          </div>
          {/* {showIcon ? <GrFormUp /> : null} */}
          {showInformation ? (
            <ul className="h-[225px] flex flex-col justify-between ">
              <li>
                <Link href="/">my account</Link>
              </li>
              <li>
                <Link href="/">login</Link>
              </li>
              <li>
                <Link href="/">my cart</Link>
              </li>
              <li>
                <Link href="/">ma wishlist</Link>
              </li>
              <li>
                <Link href="/">chwckout</Link>
              </li>
            </ul>
          ) : null}

          <ul className="h-[180px] flex flex-col justify-between max-lg:hidden">
            <li>
              <Link href="/">my account</Link>
            </li>
            <li>
              <Link href="/">login</Link>
            </li>
            <li>
              <Link href="/">my cart</Link>
            </li>
            <li>
              <Link href="/">ma wishlist</Link>
            </li>
            <li>
              <Link href="/">chwckout</Link>
            </li>
          </ul>
        </section>

        <section className="lg:h-[225px] max-lg:mb-11">
          <div
            className="flex items-center justify-between cursor-pointer mb-4 "
            onClick={() => {
              setShowService(true);
              console.log("click");
            }}
          >
            <p className="font-bold text-lg">service</p>
            <span className="text-xl lg:hidden">
              <GrDown />
            </span>
          </div>
          {showService ? (
            <ul className="h-[225px] flex flex-col justify-between ">
              <li>
                <Link href="/">about us</Link>
              </li>
              <li>
                <Link href="/">careers</Link>
              </li>
              <li>
                <Link href="/">delivery information</Link>
              </li>
              <li>
                <Link href="/">privacy policy</Link>
              </li>
              <li>
                <Link href="/">terms & conditions</Link>
              </li>
            </ul>
          ) : null}

          <ul className="h-[180px] flex flex-col justify-between max-lg:hidden">
            <li>
              <Link href="/">about us</Link>
            </li>
            <li>
              <Link href="/">careers</Link>
            </li>
            <li>
              <Link href="/">delivery information</Link>
            </li>
            <li>
              <Link href="/">privacy policy</Link>
            </li>
            <li>
              <Link href="/">terms & conditions</Link>
            </li>
          </ul>
        </section>

        <section className="lg:w-[25%] lg:h-[225px] flex flex-col justify-between gap-8 lg:gap-0  max-lg:mb-6">
          <p className="font-bold text-lg">subscribe</p>
          <span>
            enter your email below to be the first to know about new collactions
            and product launches.
          </span>

          <div className="flex items-center justify-around text-white border-2 border-white gap-2 bg-black py-3 rounded-xl">
            <button className="text-xl ml-3">
              <GrMailOption />
            </button>
            <input
              className="bg-black w-full outline-none"
              type="email"
              placeholder="your email"
            />
            <button className="text-xl mr-3">
              <GrLinkNext />
            </button>
          </div>
        </section>
      </section>

      <hr className=" mx-5 sm:mx-11" />

      <section className="lg:flex lg:items-center lg:justify-between text-white py-5 sm:py-5 sm:px-11 xl:text-[20px]">
        <div className="lg:w-[30%] flex items-center justify-center lg:justify-start lg:gap-3 gap-5 sm:gap-16 ">
          <Link href="/">
            <Image
              width={35}
              height={35}
              alt="img"
              src="/imagesFooter/Visa.png"
            />
          </Link>
          <Link href="/">
            <Image
              width={35}
              height={35}
              alt="img"
              src="/imagesFooter/PayPal.png"
            />
          </Link>
          <Link href="/">
            <Image
              width={35}
              height={35}
              alt="img"
              src="/imagesFooter/Mastercard.png"
            />
          </Link>
          <Link href="/">
            <Image
              width={35}
              height={35}
              alt="img"
              src="/imagesFooter/GooglePay.png"
            />
          </Link>
          <Link href="/">
            <Image
              width={35}
              height={35}
              alt="img"
              src="/imagesFooter/Amex.png"
            />
          </Link>
        </div>

        <p className="my-10 text-center lg:w-[30%]">
          ©2023 Krist All Rights are reserved️
        </p>

        <div className="flex items-center justify-center lg:justify-end gap-16 lg:w-[30%] text-xl mr-1">
          <Link href="/">
            <GrInstagram />
          </Link>
          <Link href="/">
            <FiTwitter />
          </Link>
          <Link href="/">
            <FiFacebook />
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Footer;
