"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function SwiperCategories() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="text-center px-5 py-11"
      >
        <SwiperSlide className="sm:bg-zinc-400 rounded-lg sm:p-2 md:text-xl xl:text-2xl xl:p-7">
          <Link href="/categoreis/jean">
            <Image
              className="mb-2 rounded-lg"
              alt="img"
              width={300}
              height={300}
              src="https://www.irisfashion.co.uk/cdn/shop/files/a4e20cfb06e3e2e6f0e788225ca4aa75_768x.jpg?v=1715742546"
            />
            <span>Jean</span>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="sm:bg-zinc-400 rounded-lg sm:p-2 md:text-xl xl:text-2xl xl:p-7">
          <Link href="/categoreis/boot">
            <Image
              className="mb-2 rounded-lg"
              alt="img"
              width={300}
              height={300}
              src="https://www.irisfashion.co.uk/cdn/shop/products/1c4fbb679604cf67ae5b6b3bd9e78f8d_768x.jpg?v=1707266631"
            />
            <span className="">boot</span>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="sm:bg-zinc-400 rounded-lg sm:p-2 md:text-xl xl:text-2xl xl:p-7">
          <Link href="/categoreis/bag">
            <Image
              className="mb-2 rounded-lg"
              alt="img"
              width={300}
              height={300}
              src="https://www.irisfashion.co.uk/cdn/shop/products/c1e4793f4acc1d5bbb56816ed5189358_768x.jpg?v=1708476798"
            />
            <span className="">bag</span>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="sm:bg-zinc-400 rounded-lg sm:p-2 md:text-xl xl:text-2xl xl:p-7">
          <Link href="/categoreis/Belts">
            <Image
              className="mb-2 rounded-lg"
              alt="img"
              width={300}
              height={300}
              src="https://www.irisfashion.co.uk/cdn/shop/products/f090b87e4843a7cafa442d75e76ad2a8_480x.jpg?v=1676074178"
            />
            <span className="">Belts</span>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="sm:bg-zinc-400 rounded-lg sm:p-2 md:text-xl xl:text-2xl xl:p-7">
          <Link href="/categoreis/women">
            <Image
              className="mb-2 rounded-lg"
              alt="img"
              width={300}
              height={300}
              src="https://www.irisfashion.co.uk/cdn/shop/files/1af6e1e7ed6da4e2108845d9aeb62362_480x.jpg?v=1714704103"
            />
            <span className="">women</span>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="sm:bg-zinc-400 rounded-lg sm:p-2 md:text-xl xl:text-2xl xl:p-7">
          <Link href="/categoreis/jewellery">
            <Image
              className="mb-2 rounded-lg"
              alt="img"
              width={300}
              height={300}
              src="https://www.irisfashion.co.uk/cdn/shop/products/2d531a47164226d3923be5bff7deb297_768x.jpg?v=1663495571"
            />
            <span className="">jewellery</span>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="sm:bg-zinc-400 rounded-lg sm:p-2 md:text-xl xl:text-2xl xl:p-7">
          <Link href="/categoreis/Bracelets">
            <Image
              className="mb-2 rounded-lg"
              alt="img"
              width={300}
              height={300}
              src="https://www.irisfashion.co.uk/cdn/shop/products/2cdf606975e2f648dede0bdc1ef97773_480x.jpg?v=1663492808"
            />
            <span className="">Bracelets</span>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="sm:bg-zinc-400 rounded-lg sm:p-2 md:text-xl xl:text-2xl xl:p-7">
          <Link href="/categoreis/hat">
            <Image
              className="mb-2 rounded-lg"
              alt="img"
              width={300}
              height={300}
              src="https://www.irisfashion.co.uk/cdn/shop/products/0ec80e26db1ae8e6a885dc72a56e90a6_768x.jpg?v=1696638207"
            />
            <span className="">hat</span>
          </Link>
        </SwiperSlide>

        <SwiperSlide className="sm:bg-zinc-400 rounded-lg sm:p-2 md:text-xl xl:text-2xl xl:p-7">
          <Link href="/categoreis/Sandal">
            <Image
              className="mb-2 rounded-lg"
              alt="img"
              width={300}
              height={300}
              src="https://www.irisfashion.co.uk/cdn/shop/files/6a46f6cd82c1643575bb99cd3a54d833_480x.jpg?v=1711502242"
            />
            <span className="">Sandal</span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
