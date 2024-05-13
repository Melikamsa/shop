"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const RelatedProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://6638e1b44253a866a24f88d2.mockapi.io/products")
      .then((res) => res.json())
      .then((result) => setProduct(result))
      .catch((err) => console.log(err));
  }, [product]);

  const slicedItems = product.slice(-4);

  return (
    <section className="px-11 lg:my-10">
      <h2 className="text-center text-xl xl:text-2xl my-6">Related Products</h2>

      <section className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        {slicedItems.map((item, i) => {
          return (
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row my-2">
              <div className="flex flex-col items-center justify-center sm:justify-between text-center gap-3 sm:gap-2 h-[450px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] ">
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
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default RelatedProducts;
