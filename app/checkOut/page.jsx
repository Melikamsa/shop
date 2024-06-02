"use client";
import React, { useContext, useEffect, useState } from "react";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShopContext } from "../shopContext/page";

const CheckOut = () => {
  const { cartItems } = useContext(ShopContext);
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
      <h2>welcome to check out</h2>

      <div>
        {console.log(product)}
        {product
          .filter((item) =>
            cartItems?.find((cartItem) => cartItem.id === item.id)
          )
          .map((item) => console.log(item))}
      </div>

      <Footer />
    </>
  );
};

export default CheckOut;
