import "@/styles/components/Header.scss";
import { GoSearch, GoHeart } from "react-icons/go";
import { PiShoppingBag } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className="header">
      <Link className="w-[120px]" href="/">
        <Image src="/LogoTextBlack.png" alt="logo" width={120} height={110} />
      </Link>

      <div>
        <ul className="menu">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/">shop</Link>
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

      <section className="left">
        <div className="icons">
          <button>
            <GoSearch />
          </button>
          <button>
            <GoHeart />
          </button>
          <button>
            <PiShoppingBag />
          </button>
        </div>
        <button className="text-white bg-black pb-4 pt-3 px-8 rounded-lg capitalize">
          login
        </button>
      </section>
    </section>
  );
};

export default Header;







