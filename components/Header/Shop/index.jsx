import Link from "next/link";
import React from "react";

const Shop = () => {
  return (
    <div className="p-3 rounded-lg bg-black text-white absolute">
      <ul className="flex flex-col gap-4">
        <Link href="/">
          <li>jewellery</li>
        </Link>
        <Link href="/">
          <li>Bracelets</li>
        </Link>
        <Link href="/">
          <li>hat</li>
        </Link>
        <Link href="/">
          <li>Belts</li>
        </Link>
        <Link href="/">
          <li>women</li>
        </Link>
        <Link href="/">
          <li>bag</li>
        </Link>
        <Link href="/">
          <li>boot</li>
        </Link>
        <Link href="/">
          <li>Jean</li>
        </Link>
      </ul>
    </div>
  );
};

export default Shop;
