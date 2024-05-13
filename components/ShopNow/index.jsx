import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const SopNow = () => {
  return (
    <section>
      <div>
        <Image
          src="/home.png"
          width={0}
          height={0}
          className="max-[500px]:blur-[2px]"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="absolute top-[110px] md:top-36 lg:top-96 xl:top-[500px] xl:left-10 sm:left-5 left-3 flex flex-col gap-1">
        <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl">
          classic exclusive
        </p>
        <h2 className="font-bold text-lg sm:text-xl lg:text-2xl 2xl:text-3xl">
          women's collection
        </h2>
        <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl">
          upto 40% off
        </p>

        <Link href="/">
          <div className="text-white mt-3 bg-black flex items-center justify-between rounded-lg py-[5px] px-3 w-[120px] lg:w-[150px] 2xl:w-[200px]">
            <button className="pb-1.5 lg:text-xl  2xl:text-2xl capitalize">
              shop now
            </button>
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SopNow;
