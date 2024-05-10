import Link from "next/link";
import React from "react";

const Shop = () => {
  return (
    <div className="w-[35%] bg-amber-200 ml-16">
      <ul>
        <Link href="/">
          <li>men</li>
        </Link>
        <Link href="/">
          <li>women</li>
        </Link>
        <Link href="/">
          <li>kids</li>
        </Link>
        <Link href="/">
          <li>bags</li>
        </Link>
        <Link href="/">
          <li>shoes</li>
        </Link>
      </ul>
    </div>
  );
};

export default Shop;
