import Link from "next/link";
import React from "react";

const Shop = () => {
  return (
    <div className="p-3 rounded-lg bg-black text-white absolute">
      <ul className="flex flex-col gap-4">
        <Link href="/products?category=jean">
          <li>Jean</li>
        </Link>
        <Link href="/products?category=boot">
          <li>boot</li>
        </Link>
        <Link href="/products?category=bag">
          <li>bag</li>
        </Link>
        <Link href="/products?category=Belts">
          <li>Belts</li>
        </Link>
        <Link href="/products?category=women">
          <li>women</li>
        </Link>
        <Link href="/products?category=jewellery">
          <li>jewellery</li>
        </Link>
        <Link href="/products?category=Bracelets">
          <li>Bracelets</li>
        </Link>
        <Link href="/products?category=hat">
          <li>hat</li>
        </Link>
        <Link href="/products?category=Sandal">
          <li>Sandal</li>
        </Link>
      </ul>
    </div>
  );
};

export default Shop;
