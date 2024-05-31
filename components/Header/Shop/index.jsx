import Link from "next/link";
import React from "react";

const Shop = () => {
  return (
    <div className="p-3 rounded-lg bg-black text-white absolute">
      <ul className="flex flex-col gap-4">
        <Link href="/categoreis/jean">
          <li>Jean</li>
        </Link>
        <Link href="/categoreis/boot">
          <li>boot</li>
        </Link>
        <Link href="/categoreis/bag">
          <li>bag</li>
        </Link>
        <Link href="/categoreis/Belts">
          <li>Belts</li>
        </Link>
        <Link href="/categoreis/women">
          <li>women</li>
        </Link>
        <Link href="/categoreis/jewellery">
          <li>jewellery</li>
        </Link>
        <Link href="/categoreis/Bracelets">
          <li>Bracelets</li>
        </Link>
        <Link href="/categoreis/hat">
          <li>hat</li>
        </Link>
        <Link href="/categoreis/Sandal">
          <li>Sandal</li>
        </Link>
      </ul>
    </div>
  );
};

export default Shop;
