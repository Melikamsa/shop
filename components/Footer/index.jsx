"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Accordion from "../Accordion";
import "../../styles/components/Footer.scss";
import {
  GrLocation,
  GrPhone,
  GrMailOption,
  GrLinkNext,
  GrInstagram,
  GrDown,
} from "react-icons/gr";
import { FiTwitter, FiFacebook } from "react-icons/fi";

const Footer = () => {
  const [showInformation, setShowInformation] = useState(false);
  const [showService, setShowService] = useState(false);

  return (
    <section className="bg-black">
      <section className="footerLeft p-5 sm:p-11 xl:text-[18px]">
        <section className="boxOneAndFour max-lg:mb-11">
          <Link href="/">
            <Image src="/LogoText.png" alt="logo" width={110} height={110} />
          </Link>

          <div className="textBoxLeft">
            <button className="text-xl mr-1">
              <GrPhone />
            </button>
            <span>(704) 555-0127</span>
          </div>

          <div className="textBoxLeft">
            <button className="text-xl mr-1">
              <GrMailOption />
            </button>
            <span>shop@gmail.com</span>
          </div>

          <div className="textBoxLeft">
            <button className="text-xl mr-1">
              <GrLocation />
            </button>
            <span>3891 ranchview dr. richardson, california 62639</span>
          </div>
        </section>

        <section className="lg:h-[225px] max-lg:mb-11 w-[100px]">
          <section className="lg:hidden">
            <Accordion
              isOpenStatus={setShowInformation}
              AccordionHeader={
                <div className="mb-4 titlesBoxTowAndThree ">
                  <p className="titles">information</p>
                  <span
                    className={`icon mt-2 ${
                      showInformation ? "rotate-180" : ""
                    }`}
                  >
                    <GrDown />
                  </span>
                </div>
              }
            >
              <ul className="minItems">
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
            </Accordion>
          </section>

          <section className="max-lg:hidden">
            <div className="mb-4 titlesBoxTowAndThree ">
              <p className="titles">information</p>
              <span className="icon mt-2">
                <GrDown />
              </span>
            </div>
            <ul className="maxItems">
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
                <Link href="/">mawishlist</Link>
              </li>
              <li>
                <Link href="/">chwckout</Link>
              </li>
            </ul>
          </section>
        </section>

        <section className="lg:h-[225px] max-lg:mb-11 w-[200px]">
          <section className="lg:hidden">
            <Accordion
              isOpenStatus={setShowService}
              AccordionHeader={
                <div className="titlesBoxTowAndThree mb-4">
                  <p className="titles">service</p>
                  <span
                    className={`icon mt-2 ${showService ? "rotate-180" : ""}`}
                  >
                    <GrDown />
                  </span>
                </div>
              }
            >
              <ul className="minItems lg:hidden">
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
            </Accordion>
          </section>

          <section className="max-lg:hidden">
            <div className="titlesBoxTowAndThree mb-4">
              <p className="titles">service</p>
              <span className="icon mt-2">
                <GrDown />
              </span>
            </div>
            <ul className="maxItems">
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
        </section>

        <section className="boxOneAndFour gap-8 lg:gap-0 max-lg:mb-6">
          <p className="font-bold text-lg">subscribe</p>
          <span>
            enter your email below to be the first to know about new collactions
            and product launches.
          </span>

          <div className="boxImail border-2 border-white gap-2 py-3">
            <button className="text-xl ml-3">
              <GrMailOption />
            </button>
            <input
              className="outline-none"
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

      <section className="bottom py-5 sm:py-5 sm:px-11 ">
        <div className="PaymentGateway lg:gap-3 gap-5 sm:gap-16 ">
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

        <div className="socialMedia gap-16 mr-1">
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
