"use client";
import { React, useEffect, useState } from "react";
import Image from "next/image";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://6638e1b44253a866a24f88d2.mockapi.io/products")
      .then((Response) => Response.json())
      .then((Result) => setProduct(Result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {product.map((data) => {
        return (
          <>
          <p>{data.title}</p>
          <p>{data.price} $</p>
          <p>{data.colors}</p>

            <Image width={320} height={320} alt={"img"} src={data.images} />
          </>
        );
      })}
    </div>
  );
};

export default Products;
