"use client";
import { React, useEffect, useState } from "react";
import Image from "next/image";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((Response) => Response.json())
      .then((Result) => setProduct(Result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {product.map((data) => {
        return (
          <>
            <Image width={320} height={320} alt={"img"} src={data.image} />
          </>
        );
      })}
    </div>
  );
};

export default Products;
