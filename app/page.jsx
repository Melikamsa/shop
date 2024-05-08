import "@/styles/globals.css";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Information from "@/components/Information";
import Image from "next/image";
import Link from "next/link";
import Timer from "@/components/Timer";
import { FaArrowRightLong, FaInstagram } from "react-icons/fa6";

const HomePage = () => {
  return (
    <>
      <Header />
      <section>
        <div className="relative">
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

      <Timer duration={113 * 24 * 60 * 60 * 1000} />

      <section className="px-11 py-7">
        <h2 className="text-center text-xl my-6 xl:text-2xl">
          our instagram posts
        </h2>
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row ">
          <Link className="hover:blur-[2px]" href="/">
            <Image
              src="/instagramPost/12.png"
              alt="instagram Post"
              width={300}
              height={300}
            />
          </Link>
          <Link href="/">
            <Image
              src="/instagramPost/34.png"
              alt="instagram Post"
              width={300}
              height={300}
            />
          </Link>
          <Link href="/">
            <Image
              src="/instagramPost/56.png"
              alt="instagram Post"
              width={300}
              height={300}
            />
          </Link>
          <Link href="/">
            <Image
              src="/instagramPost/Rectangle 12348.png"
              alt="instagram Post"
              width={300}
              height={300}
            />
          </Link>
        </div>
      </section>
      <Information />
      <Footer />
    </>
  );
};

export default HomePage;