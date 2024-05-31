"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const OurBestseller = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://6638e1b44253a866a24f88d2.mockapi.io/products")
      .then((res) => res.json())
      .then((result) => setProduct(result))
      .catch((err) => console.log(err));
  }, [product]);

  const slicedItems = product.slice(-8);

  return (
    <section className="p-5">
      <h2 className="text-center text-xl xl:text-2xl my-6">Our Bestseller</h2>

      <section className="  sm:flex sm:flex-wrap sm:items-center sm:justify-between">
        {slicedItems.map((item, i) => {
          return (
            <div className=" flex flex-col items-center justify-center sm:w-[200px] lg:w-[240px] xl:w-[280px] gap-2 m-3 xl:text-xl ">
              <Link href={`products/${item.id}`} key={i}>
                <Image
                  src={item.images[0]}
                  alt="img"
                  width={300}
                  height={300}
                />
              </Link>
              <p>{item.title}</p>
              <p>{item.price} $</p>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default OurBestseller;
