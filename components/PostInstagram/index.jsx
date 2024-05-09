import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import "@/styles/components/PostInstagram.css";

const PostInstagram = () => {
  return (
    <section className="px-11 py-7">
      <h2 className="text-center text-xl xl:text-2xl my-6">
        our instagram posts
      </h2>

      <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="relative box">
          <Image
            className="hover:blur-[4px] "
            src="/instagramPost/56.png"
            alt="instagram Post"
            width={300}
            height={300}
          />
          <Link href="/">
            <FaInstagram className="inBox hidden absolute cursor-pointer left-0 top-0 bottom-0 right-0 m-auto text-4xl text-white" />
          </Link>
        </div>

        <div className="relative box">
          <Image
            className="hover:blur-[4px] "
            src="/instagramPost/34.png"
            alt="instagram Post"
            width={300}
            height={300}
          />
          <Link href="/">
            <FaInstagram className="inBox hidden absolute cursor-pointer left-0 top-0 bottom-0 right-0 m-auto text-4xl text-white" />
          </Link>
        </div>

        <div className="relative box">
          <Image
            className="hover:blur-[4px] "
            src="/instagramPost/12.png"
            alt="instagram Post"
            width={300}
            height={300}
          />
          <Link href="/">
            <FaInstagram className="inBox hidden absolute cursor-pointer left-0 top-0 bottom-0 right-0 m-auto text-4xl text-white" />
          </Link>
        </div>

        <div className="relative box">
          <Image
            className="hover:blur-[4px] "
            src="/instagramPost/78.png"
            alt="instagram Post"
            width={300}
            height={300}
          />
          <Link href="/">
            <FaInstagram className="inBox hidden absolute cursor-pointer left-0 top-0 bottom-0 right-0 m-auto text-4xl text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostInstagram;
