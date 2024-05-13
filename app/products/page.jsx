"use client";
import { React, useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import Link from "next/link";
import Information from "@/components/Information";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://6638e1b44253a866a24f88d2.mockapi.io/products")
      .then((Response) => Response.json())
      .then((Result) => setProduct(Result))
      .catch((err) => console.log(err));
  }, [product]);

  return (
    <>
      <Header />
      <main className="m-5">
        {product.map((data) => {
          return (
            <Link href={`/products/${data.id}`}>
              <div className="bg-black text-white my-5 p-3 flex flex-col items-center justify-center rounded-lg">
                <Image
                className="rounded-lg"
                  width={200}
                  height={200}
                  alt={"img"}
                  src={data.images[0]}
                />
                <p className="my-3">{data.title}</p>
                <p>{data.price} $</p>
              </div>
            </Link>
          );
        })}
      </main>
      <Information/>
      <Footer />
    </>
  );
};

export default Products;
